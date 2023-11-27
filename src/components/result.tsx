import { Box, Text } from '@chakra-ui/react';

import { options } from '../const';
import { useWheelContext } from '../context/wheel-context';

export function Result() {
  const { result } = useWheelContext();

  return result ? (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      zIndex={3}
      transform="rotate(-15deg) translate(-50%,-50%)"
      padding={8}
      bg="white"
      shadow="lg"
      textAlign="center"
    >
      <Text fontSize="5xl" fontWeight="bold">
        {options.find(option => option.label === result)?.description}
      </Text>
    </Box>
  ) : null;
}
