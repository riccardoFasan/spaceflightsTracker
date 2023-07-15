import { Text } from 'react-native';
import { useState, useEffect } from 'react';
import { formatDateTmeDifference, getDateDiffererce } from '../../utilities';

interface Props {
  date: string;
  styles: any;
}

export const Countdown = ({ date, styles }: Props) => {
  let interval: any;

  const [countdown, setCountdown] = useState<string>('');
  const [difference, setDifference] = useState<number>(0);

  useEffect(() => {
    initCountdown();
  }, []);

  useEffect(() => {
    setCountdown(formatDateTmeDifference(difference));
  }, [difference]);

  function initCountdown(): void {
    interval = setInterval(() => updateCountdown(), 10);
  }

  function updateCountdown(): void {
    const newDifference: number = getDateDiffererce(date);
    if (newDifference >= 0) {
      setDifference(newDifference);
      return;
    }
    setDifference(0);
    if (interval) clearInterval(interval);
  }

  return <Text style={styles}>T- {countdown}</Text>;
};
