import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface WheelContextValue {
  isSpinning: boolean;
  setIsSpinning: (value: boolean) => void;
  result: string | null;
  setResult: (value: string | null) => void;
}

const WheelContext = createContext<WheelContextValue>({
  isSpinning: false,
  setIsSpinning: () => {},
  result: null,
  setResult: () => {},
});

export function useWheelContext() {
  return useContext(WheelContext);
}

export function WheelContextProvider(props: PropsWithChildren) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  return <WheelContext.Provider {...props} value={{ isSpinning, setIsSpinning, result, setResult }} />;
}
