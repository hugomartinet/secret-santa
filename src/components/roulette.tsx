import { Button, Center, Text, useToken } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Wheel } from 'react-custom-roulette';

import { useRouletteContext } from '../context/roulette-context';

import { Result } from './result';

interface RouletteProps {
  options: string[];
}

export function Roulette({ options }: RouletteProps) {
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

  const { isSpinning, setIsSpinning, setResult } = useRouletteContext();
  const [resultIndex, setResultIndex] = useState(0);

  const onSpin = useCallback(() => {
    setResult(null);
    setResultIndex(Math.floor(Math.random() * options.length));
    setIsSpinning(true);
  }, [options, setResult, setIsSpinning]);

  const onStopSpinning = useCallback(() => {
    setIsSpinning(false);
    setResult(options[resultIndex]);
  }, [setIsSpinning, options, resultIndex, setResult]);

  return (
    <Center flex={1} flexDir="column">
      {options.length > 0 ? (
        <>
          <Wheel
            mustStartSpinning={isSpinning}
            prizeNumber={resultIndex}
            data={options.map(option => ({ option }))}
            onStopSpinning={onStopSpinning}
            backgroundColors={colors}
            outerBorderWidth={4}
            radiusLineWidth={2}
          />
          <Button mt={8} size="lg" onClick={onSpin} isDisabled={isSpinning}>
            Spin that wheel!
          </Button>

          <Result />
        </>
      ) : (
        <Text fontSize="xl">Add options in the list before spinning the wheel!</Text>
      )}
    </Center>
  );
}
