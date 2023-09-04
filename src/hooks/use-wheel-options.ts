import { useCallback } from 'react';
import { useLocalStorage } from 'react-use';

export function useWheelOptions() {
  const [options, setOptions] = useLocalStorage<string[]>('wheel-options', []);

  const addOption = useCallback((value: string) => setOptions([...(options ?? []), value]), [options, setOptions]);

  const removeOption = useCallback(
    (value: string) => setOptions((options ?? []).filter(option => option !== value)),
    [options, setOptions]
  );

  return { options: options ?? [], addOption, removeOption };
}
