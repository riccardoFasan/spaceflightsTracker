import { Text } from 'react-native';
import { useState, useEffect } from 'react';
import { formatDateTmeDifference, getDateDiffererce } from '../../utilities';

interface Props {
  date: string;
  styles: any;
}

export const Countdown = ({ date, styles }: Props) => {
  const [countdown, setCountdown] = useState<string>('');
  const [difference, setDifference] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timer;

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
      clearInterval(interval);
    }

    initCountdown();

    return () => clearInterval(interval);
  }, [date]);

  useEffect(() => {
    const formattedDifference: string = formatDateTmeDifference(difference);
    setCountdown(formattedDifference);
  }, [difference]);

  return <Text style={styles}>T- {countdown}</Text>;
};
