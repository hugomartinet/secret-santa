import { useMemo, useState } from 'react';
import { Wheel } from 'react-custom-roulette';

import { useRouletteOptions } from '../hooks/use-roulette-options';

export function Roulette() {
  const [mustSpin, setMustSpin] = useState(false);

  const [options] = useRouletteOptions();
  const prizeNumber = useMemo(() => Math.floor(Math.random() * (options?.length ?? 0)), [mustSpin]);

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={options?.map(option => ({ option })) ?? []}
        onStopSpinning={() => setMustSpin(false)}
      />

      <button onClick={() => setMustSpin(true)}>Start</button>
    </>
  );
}
