import { createContext, useState, useMemo, ReactNode } from 'react';

type ReflleContextProps = {
  children: ReactNode;
};

type ReflleContextType = {
  reflleId: number;
  setReflleId: (newState: number) => void;
  contestId: string;
  setContestId: (newState: string) => void;
};
const initialValue = {
  reflleId: 0,
  setReflleId: () => null,
  contestId: '2359',
  setContestId: () => null,
};

export const ReflleContext = createContext<ReflleContextType>(initialValue);
export function ReflleContextProvider({ children }: ReflleContextProps) {
  const [reflleId, setReflleId] = useState<number>(initialValue.reflleId);
  const [contestId, setContestId] = useState<string>(initialValue.contestId);
  const value = useMemo(
    () => ({ reflleId, setReflleId, contestId, setContestId }),
    [reflleId, contestId],
  );

  return (
    <ReflleContext.Provider value={value}>{children}</ReflleContext.Provider>
  );
}
