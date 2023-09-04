import { Button, Center, Text, useToken } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Wheel } from 'react-custom-roulette';

interface RouletteProps {
  options: string[];
}

export function Roulette({ options }: RouletteProps) {
  const [mustSpin, setMustSpin] = useState(false);
  const colors = useToken('colors', [
    'red.400',
    'orange.400',
    'yellow.400',
    'green.400',
    'teal.400',
    'blue.400',
    'cyan.400',
    'purple.400',
    'pink.400',
  ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const prizeNumber = useMemo(() => Math.floor(Math.random() * (options?.length ?? 0)), [options?.length, mustSpin]);

  return (
    <Center flex={1} flexDir="column">
      {options.length > 0 ? (
        <>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={options?.map(option => ({ option })) ?? []}
            onStopSpinning={() => setMustSpin(false)}
            backgroundColors={colors}
            outerBorderWidth={4}
            radiusLineWidth={2}
          />
          <Button mt={8} size="lg" onClick={() => setMustSpin(true)}>
            Spin that wheel!
          </Button>
        </>
      ) : (
        <Text fontSize="xl">Add options in the list before spinning the wheel!</Text>
      )}
    </Center>
  );
}
