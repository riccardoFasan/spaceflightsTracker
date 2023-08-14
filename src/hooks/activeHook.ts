import { useState } from "react";

export function useActive(value: boolean): [boolean, () => void] {
  const [active, setActive] = useState<boolean>(value);
  const toggleActive = () => setActive(!active);
  return [active, toggleActive];
}
