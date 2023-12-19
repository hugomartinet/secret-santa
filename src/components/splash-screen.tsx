import { Center, Heading } from '@chakra-ui/react';

interface SplashScreenProps {
  onEnter: () => void;
}

export function SplashScreen({ onEnter }: SplashScreenProps) {
  return (
    <Center w="100vw" h="100vh" bgColor="black" onClick={onEnter}>
      <Heading size="4xl" color="white">{`Entrer -->[]`}</Heading>
    </Center>
  );
}
