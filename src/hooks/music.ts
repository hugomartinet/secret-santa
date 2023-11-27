import { useEffect } from 'react';

export function useBackgroundMusic() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const audio = new Audio(require('../assets/music.mp3'));
    window.addEventListener('click', () => audio.play());
    return () => window.removeEventListener('click', () => audio.play());
  }, []);
}
