import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Color, Spacing, FontWeight, typographyStyles, flexBoxStyles } from '../../styles';
import { useFocus } from '../../hooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';
import { Launch, ScheduledNotification } from '../../models';
import { useNotifications } from '../../contexts';

interface Props {
  launch: Launch;
}

export const NotificationButton = ({ launch }: Props) => {
  const [focus, toogleFocus] = useFocus(false);

  const [icon, setIcon] = useState<string>('bell-outline');
  const [text, setText] = useState<string>('notify me');

  const [notification, setNotification] = useState<ScheduledNotification | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { notifications, get, schedule, cancel } = useNotifications();

  useEffect(() => {
    setNotification(get(launch.id));
  }, [launch, notifications, get]);

  useEffect(() => {
    const text: string = notification ? 'notice activated' : 'notify me';
    const icon: string = notification ? 'bell' : 'bell-outline';
    setText(text);
    setIcon(icon);
  }, [notification]);

  async function onPress(): Promise<void> {
    if (loading) {
      return;
    }
    if (notification) {
      await cancelNotification();
      return;
    }
    await scheduleNotification();
  }

  async function scheduleNotification(): Promise<void> {
    if (notification) {
      return;
    }
    setLoading(true);
    const startDate: Date = new Date(launch.window!.start!);
    setNotification(await schedule(launch.id, launch.name, startDate));
    setLoading(false);
  }

  async function cancelNotification(): Promise<void> {
    if (!notification) {
      return;
    }
    setLoading(true);
    await cancel(notification);
    setNotification(null);
    setLoading(false);
  }

  return (
    <Pressable
      onPress={onPress}
      onPressIn={toogleFocus}
      onPressOut={toogleFocus}
      style={[styles.button, notification && styles.buttonActive, focus && styles.buttonFocus]}
    >
      <Icon style={styles.icon} name={icon} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    ...flexBoxStyles.rowCenter,
    paddingVertical: Spacing.Medium,
    backgroundColor: Color.Anthracite,
    borderRadius: Spacing.Large,
    borderWidth: 1,
    borderColor: Color.LightAnthracite,
  },
  buttonFocus: {
    backgroundColor: Color.LightAnthracite,
  },
  buttonActive: {
    backgroundColor: 'transparent',
  },
  text: {
    ...typographyStyles.paragraph,
    fontWeight: FontWeight.Regular,
    color: Color.White,
  },
  icon: {
    fontSize: 18,
    color: Color.White,
    marginRight: Spacing.Small,
  },
});
