export function getDateDiffererce(
  startDate: Date | string,
  endDate: Date | string = new Date(),
): number {
  return new Date(startDate).getTime() - new Date(endDate).getTime();
}
