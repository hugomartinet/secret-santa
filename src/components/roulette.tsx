import { Box } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Wheel } from 'react-custom-roulette';

interface RouletteProps {
  options: string[];
}

export function Roulette({ options }: RouletteProps) {
  const [mustSpin, setMustSpin] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const prizeNumber = useMemo(() => Math.floor(Math.random() * (options?.length ?? 0)), [options?.length, mustSpin]);

  return (
    <Box flex={1}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={options?.map(option => ({ option })) ?? []}
        onStopSpinning={() => setMustSpin(false)}
      />

      <button onClick={() => setMustSpin(true)}>Start</button>
    </Box>
  );
}
