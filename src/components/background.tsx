import { Image } from '@chakra-ui/react';

import backgroundImage from '../assets/background.png';

export function Background() {
  return <Image position="absolute" w="100vw" h="100vh" src={backgroundImage} zIndex={0} />;
}
