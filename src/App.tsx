import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';

import { Background } from './components/background';
import { GiftTime } from './components/gift-time';
import { SplashScreen } from './components/splash-screen';
import { useBackgroundMusic } from './hooks/music';

function App() {
  useBackgroundMusic();

  const [isSplashScreen, setIsSplashScreen] = useState(true);

  return (
    <ChakraProvider>
      {isSplashScreen ? (
        <SplashScreen onEnter={() => setIsSplashScreen(false)} />
      ) : (
        <>
          <Background />
          <GiftTime />
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
