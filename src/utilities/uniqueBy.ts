export function uniqueBy<T>(key: keyof T, array: T[]): T[] {
  const uniques: Set<any> = new Set<any>();
  return array.filter((item) => {
    const keyValue: any = item[key];
    if (uniques.has(keyValue)) {
      return false;
    }
    uniques.add(keyValue);
    return true;
  });
}
