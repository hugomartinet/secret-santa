import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';

import { useRouletteContext } from '../context/roulette-context';

import { OptionInput } from './option-input';

interface OptionsTableProps {
  options: string[];
  addOption: (value: string) => void;
  removeOption: (value: string) => void;
}

export function OptionsTable({ options, addOption, removeOption }: OptionsTableProps) {
  const { isSpinning } = useRouletteContext();

  return (
    <TableContainer overflowY="scroll" borderWidth={1} boxShadow="lg" rounded="lg">
      <Table minW={{ base: 'none', lg: 400 }}>
        <Tbody>
          {options?.map(option => (
            <Tr key={option}>
              <Td>{option}</Td>
              <Td p="unset" pr={4} textAlign="end">
                <IconButton
                  aria-label="delete"
                  colorScheme="red"
                  variant="ghost"
                  size="sm"
                  icon={<DeleteIcon />}
                  onClick={() => removeOption(option)}
                  isDisabled={isSpinning}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <OptionInput addOption={addOption} />
    </TableContainer>
  );
}
