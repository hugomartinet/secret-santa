import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';

import { OptionInput } from './option-input';

interface OptionsTableProps {
  options: string[];
  addOption: (value: string) => void;
  removeOption: (value: string) => void;
}

export function OptionsTable({ options, addOption, removeOption }: OptionsTableProps) {
  return (
    <TableContainer overflowY="scroll" m={4} borderWidth={1} boxShadow="lg" rounded="lg">
      <Table minW={400}>
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
