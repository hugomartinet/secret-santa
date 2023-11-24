import { Box, Collapse, Text } from '@chakra-ui/react';

import { options } from '../const';
import { useWheelContext } from '../context/wheel-context';

export function Result() {
  const { result } = useWheelContext();

  return (
    <Collapse in={!!result} style={{ width: '100%' }}>
      <Box mt={4} bg="teal.400" color="white" rounded="lg" shadow="lg" textAlign="center">
        <Text fontSize="5xl" fontWeight="bold">
          {options.find(option => option.label === result)?.description}
        </Text>
      </Box>
    </Collapse>
  );
}
