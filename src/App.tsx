import { ChakraProvider, Stack } from '@chakra-ui/react';

import './App.css';
import { OptionsTable } from './components/options-table';
import { Roulette } from './components/roulette';
import { RouletteContextProvider } from './context/roulette-context';
import { useRouletteOptions } from './hooks/use-roulette-options';

function App() {
  const { options, addOption, removeOption } = useRouletteOptions();

  return (
    <ChakraProvider>
      <RouletteContextProvider>
        <Stack spacing={4} p={4} direction={{ base: 'column', lg: 'row' }} h={{ base: '100%', lg: '100vh' }}>
          <Roulette options={options} />
          <OptionsTable addOption={addOption} options={options} removeOption={removeOption} />
        </Stack>
      </RouletteContextProvider>
    </ChakraProvider>
  );
}

export default App;
