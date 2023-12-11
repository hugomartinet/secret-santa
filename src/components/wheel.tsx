import { Button, Center, useToken } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Wheel as ReactRoulette } from 'react-custom-roulette';

import { useWheelContext } from '../context/wheel-context';

import { Result } from './result';

interface WheelProps {
  options: string[];
}

export function Wheel({ options }: WheelProps) {
  const colors = useToken('colors', ['#F5624D', '#CC231E', '#34A65F', '#0F8A5F', '#235E6F']);

  const { isSpinning, setIsSpinning, setResult } = useWheelContext();
  const [resultIndex, setResultIndex] = useState(0);

  const onSpin = useCallback(() => {
    setResult(null);
    setResultIndex(0);
    setIsSpinning(true);
  }, [setResult, setIsSpinning]);

  const onStopSpinning = useCallback(() => {
    setIsSpinning(false);
    setResult(options[resultIndex]);
  }, [setIsSpinning, options, resultIndex, setResult]);

  return (
    <>
      <Center flex={1} flexDir="column" zIndex={2}>
        <ReactRoulette
          mustStartSpinning={isSpinning}
          prizeNumber={resultIndex}
          data={options.map(option => ({ option }))}
          onStopSpinning={onStopSpinning}
          backgroundColors={colors}
          outerBorderWidth={4}
          radiusLineWidth={2}
          fontSize={36}
        />
        <Button mt={{ base: 4, lg: 8 }} size="lg" onClick={onSpin} isDisabled={isSpinning} colorScheme="red">
          Lance la roue !
        </Button>
      </Center>

      <Result />
    </>
  );
}
