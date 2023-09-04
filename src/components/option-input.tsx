import { Button, HStack, Input } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

import { useRouletteContext } from '../context/roulette-context';

interface OptionInputProps {
  addOption: (value: string) => void;
}

export function OptionInput({ addOption }: OptionInputProps) {
  const { isSpinning } = useRouletteContext();

  const [value, setValue] = useState('');

  const onSubmit = useCallback(() => {
    addOption(value);
    setValue('');
  }, [addOption, value]);

  const keyDownListener = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') onSubmit();
    },
    [onSubmit]
  );
  useEffect(() => {
    window.addEventListener('keydown', keyDownListener);
    return () => window.removeEventListener('keydown', keyDownListener);
  }, [keyDownListener]);

  return (
    <HStack w="full" p={2}>
      <Input value={value} onChange={event => setValue(event.target.value)} />
      <Button onClick={onSubmit} colorScheme="blue" isDisabled={value.length === 0 || isSpinning}>
        Add
      </Button>
    </HStack>
  );
}
