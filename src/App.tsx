import { ChakraProvider, Stack } from '@chakra-ui/react';

import { Wheel } from './components/wheel';
import { options } from './const';
import { WheelContextProvider } from './context/wheel-context';

function App() {
  return (
    <ChakraProvider>
      <WheelContextProvider>
        <Stack spacing={4} p={4} direction={{ base: 'column', lg: 'row' }} h={{ base: '100%', lg: '100vh' }}>
          <Wheel options={options.map(option => option.label)} />
        </Stack>
      </WheelContextProvider>
    </ChakraProvider>
  );
}

export default App;
