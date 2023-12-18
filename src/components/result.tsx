import { Box, Image, Slide, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

import santaImage from '../assets/santa.png';
import { options } from '../const';
import { useWheelContext } from '../context/wheel-context';

export function Result() {
  const { result } = useWheelContext();

  const [showSubdescription, setShowSubdescription] = useState(false);
  const [showSanta, setShowSanta] = useState(false);

  useEffect(() => {
    if (result) setTimeout(() => setShowSubdescription(true), 3000);
    if (result) setTimeout(() => setShowSanta(true), 5000);
  }, [result]);

  return result ? (
    <>
      <Slide direction="left" in={showSanta}>
        <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
        <Image src={santaImage} />
      </Slide>

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

      {showSubdescription && (
        <Box
          position="absolute"
          top="60%"
          left="70%"
          zIndex={3}
          transform="rotate(-10deg) translate(-50%,-50%)"
          padding={8}
          bg="teal"
          color="white"
          shadow="lg"
          textAlign="center"
        >
          <Text fontSize="3xl" fontWeight="bold">
            {options.find(option => option.label === result)?.subdescription}
          </Text>
        </Box>
      )}
    </>
  ) : null;
}
