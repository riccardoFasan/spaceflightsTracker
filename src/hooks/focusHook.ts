import { useState } from "react";

export function useFocus(value: boolean): [boolean, () => void] {
  const [focus, setFocus] = useState<boolean>(value);
  const toggleFocus = () => setFocus(!focus);
  return [focus, toggleFocus];
}
