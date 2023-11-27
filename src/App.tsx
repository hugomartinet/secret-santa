import { ChakraProvider } from '@chakra-ui/react';

import { Background } from './components/background';
import { GiftTime } from './components/gift-time';
import { useBackgroundMusic } from './hooks/music';

function App() {
  useBackgroundMusic();

  return (
    <ChakraProvider>
      <Background />
      <GiftTime />
    </ChakraProvider>
  );
}

export default App;
