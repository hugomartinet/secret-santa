import { useLocalStorage } from 'react-use';

export function useRouletteOptions() {
  return useLocalStorage<string[]>('roulette-options', []);
}
