import dayjs, { Dayjs } from "dayjs";

export function formatDateTime(dateTime: Date | string): string {
  const instance: Dayjs = dayjs(dateTime);
  return instance.format("dddd DD MMMM YYYY, HH:mm");
}
