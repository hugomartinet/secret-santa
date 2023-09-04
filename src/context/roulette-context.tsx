import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface RouletteContextValue {
  isSpinning: boolean;
  setIsSpinning: (value: boolean) => void;
  result: string | null;
  setResult: (value: string | null) => void;
}

const RouletteContext = createContext<RouletteContextValue>({
  isSpinning: false,
  setIsSpinning: () => {},
  result: null,
  setResult: () => {},
});

export function useRouletteContext() {
  return useContext(RouletteContext);
}

export function RouletteContextProvider(props: PropsWithChildren) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  return <RouletteContext.Provider {...props} value={{ isSpinning, setIsSpinning, result, setResult }} />;
}
