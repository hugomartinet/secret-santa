import { Button, Center, Slide } from '@chakra-ui/react';
import { useState } from 'react';

import { options } from '../const';
import { WheelContextProvider } from '../context/wheel-context';

import { Wheel } from './wheel';

export function GiftTime() {
  const [showWheel, setShowWheel] = useState(false);

  return (
    <Center w="100vw" h="100vh">
      {showWheel ? (
        <Slide direction="bottom" in style={{ height: '100%', display: 'flex' }}>
          <WheelContextProvider>
            <Wheel options={options.map(option => option.label)} />
          </WheelContextProvider>
        </Slide>
      ) : (
        <Button mt="30%" onClick={() => setShowWheel(true)}>
          Clique pour avoir ton cadeau !
        </Button>
      )}
    </Center>
  );
}
