export function formatDateTmeDifference(difference: number): string {
  const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes: number = Math.floor((difference / (1000 * 60)) % 60);
  const seconds: number = Math.floor((difference / 1000) % 60);
  return `${toTwoDigit(days)}:${toTwoDigit(hours)}:${toTwoDigit(
    minutes
  )}:${toTwoDigit(seconds)}`;
}

function toTwoDigit(value: number): string | number {
  if (value > 9) return value;
  return `0${value}`;
}
