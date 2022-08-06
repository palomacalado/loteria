import { createContext, useState, useMemo, ReactNode } from 'react';

type BallContextProps = {
  children: ReactNode;
};

type BallContextType = {
  ball: number[];
  setBall: (newState: number[]) => void;
};
const initialValue = {
  ball: [],
  setBall: () => null,
};

export const BallContext = createContext<BallContextType>(initialValue);
export function BallContextProvider({ children }: BallContextProps) {
  const [ball, setBall] = useState<number[]>(initialValue.ball);
  const value = useMemo(() => ({ ball, setBall }), [ball]);

  return <BallContext.Provider value={value}>{children}</BallContext.Provider>;
}
