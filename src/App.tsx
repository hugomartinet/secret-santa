import { ChakraProvider, Stack } from '@chakra-ui/react';

import { Background } from './components/background';
import { Wheel } from './components/wheel';
import { options } from './const';
import { WheelContextProvider } from './context/wheel-context';
import { useBackgroundMusic } from './hooks/music';

function App() {
  useBackgroundMusic();

  return (
    <ChakraProvider>
      <Background />
      <WheelContextProvider>
        <Stack spacing={4} p={4} direction={{ base: 'column', lg: 'row' }} h={{ base: '100%', lg: '100vh' }}>
          <Wheel options={options.map(option => option.label)} />
        </Stack>
      </WheelContextProvider>
    </ChakraProvider>
  );
}

export default App;
