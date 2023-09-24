import notifee, {
  AndroidImportance,
  AndroidNotificationSetting,
  AuthorizationStatus,
  Notification,
  NotificationSettings,
  Trigger,
  TriggerNotification,
  TriggerType,
} from '@notifee/react-native';
import { ScheduledNotification } from '../models';
import { Alert } from 'react-native';

const ANDROID_CHANNEL_ID: string = 'space-flights-tracker-channel';
const ANDROID_CHANNEL_NAME: string = 'Space Flights Tracker Channel';

export async function setUpNotifications(): Promise<void> {
  const settings: NotificationSettings = await notifee.requestPermission();
  if (!isAuthorized(settings)) {
    return;
  }

  if (settings.android.alarm !== AndroidNotificationSetting.ENABLED) {
    Alert.alert(
      'Allow exact alarm permission',
      'Allow exact alarm to ensure the proper functioning of the application',
      [
        {
          text: 'OK',
          onPress: async () => await notifee.openAlarmPermissionSettings(),
        },
      ],
    );
  }

  await notifee.createChannel({
    id: ANDROID_CHANNEL_ID,
    name: ANDROID_CHANNEL_NAME,
  });
}

export async function getNotifications(): Promise<ScheduledNotification[]> {
  const notifications: TriggerNotification[] =
    await notifee.getTriggerNotifications();
  return notifications.map((n) => ({
    id: n.notification.id!,
    targetId: (n.notification.data as any).payload.id,
    target: (n.notification.data as any).target,
  }));
}

export async function scheduleNotification(
  id: string,
  name: string,
  fireDate: Date,
): Promise<ScheduledNotification> {
  const notification: Notification = {
    title: 'Space Flights Tracker',
    body: `${name} is about to launch!`,
    data: { id, name, fireDate },
    android: {
      channelId: ANDROID_CHANNEL_ID,
      importance: AndroidImportance.HIGH,
      pressAction: { id: 'default' },
    },
  };

  const trigger: Trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: fireDate.getTime(),
  };

  const notificationId: string = await notifee.createTriggerNotification(
    notification,
    trigger,
  );

  return { id: notificationId, targetId: id };
}

export async function cancelNotification(
  notification: ScheduledNotification,
): Promise<void> {
  await notifee.cancelNotification(notification.id);
}

function isAuthorized(settings: NotificationSettings): boolean {
  const status: AuthorizationStatus = settings.authorizationStatus;
  return (
    status === AuthorizationStatus.AUTHORIZED ||
    status === AuthorizationStatus.PROVISIONAL
  );
}
