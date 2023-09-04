import { ChakraProvider, Stack } from '@chakra-ui/react';

import './App.css';
import { OptionsTable } from './components/options-table';
import { Roulette } from './components/roulette';
import { useRouletteOptions } from './hooks/use-roulette-options';

function App() {
  const { options, addOption, removeOption } = useRouletteOptions();

  return (
    <ChakraProvider>
      <Stack direction="row" w="100vw" h="100vh">
        <Roulette options={options} />
        <OptionsTable addOption={addOption} options={options} removeOption={removeOption} />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
