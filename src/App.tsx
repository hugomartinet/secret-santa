import { ChakraProvider, Stack } from '@chakra-ui/react';

import './App.css';
import { OptionsTable } from './components/options-table';
import { Wheel } from './components/wheel';
import { WheelContextProvider } from './context/wheel-context';
import { useWheelOptions } from './hooks/use-wheel-options';

function App() {
  const { options, addOption, removeOption } = useWheelOptions();

  return (
    <ChakraProvider>
      <WheelContextProvider>
        <Stack spacing={4} p={4} direction={{ base: 'column', lg: 'row' }} h={{ base: '100%', lg: '100vh' }}>
          <Wheel options={options} />
          <OptionsTable addOption={addOption} options={options} removeOption={removeOption} />
        </Stack>
      </WheelContextProvider>
    </ChakraProvider>
  );
}

export default App;
