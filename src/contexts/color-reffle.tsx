import { createContext, useState, useMemo, ReactNode } from 'react';

type ColorContextProps = {
  children: ReactNode;
};

type ColorContextType = {
  backgroundColor: string;
  setBackgroundColor: (newState: string) => void;
};
const initialValue = {
  backgroundColor: '#6BEFA3',
  setBackgroundColor: () => null,
};

export const ColorContext = createContext<ColorContextType>(initialValue);
export function ColorContextProvider({ children }: ColorContextProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    initialValue.backgroundColor,
  );
  const value = useMemo(
    () => ({ backgroundColor, setBackgroundColor }),
    [backgroundColor],
  );

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}
