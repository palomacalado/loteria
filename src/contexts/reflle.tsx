import { createContext, useState, useMemo, ReactNode } from 'react';
import megasena from '../assets/megasena.png';
import megasenamobile from '../assets/senamobile.png';

type ReflleContextProps = {
  children: ReactNode;
};
const largura = window.screen.width;

type ReflleContextType = {
  reflleId: number;
  setReflleId: (newState: number) => void;
  contestId: string;
  setContestId: (newState: string) => void;
  image: string;
  setImage: (newState: string) => void;
};
const initialValue = {
  reflleId: 0,
  setReflleId: () => null,
  contestId: '2359',
  setContestId: () => null,
  image: largura > 600 ? megasena : megasenamobile,
  setImage: () => null,
};

export const ReflleContext = createContext<ReflleContextType>(initialValue);
export function ReflleContextProvider({ children }: ReflleContextProps) {
  const [reflleId, setReflleId] = useState<number>(initialValue.reflleId);
  const [contestId, setContestId] = useState<string>(initialValue.contestId);
  const [image, setImage] = useState<string>(initialValue.image);
  const value = useMemo(
    () => ({ reflleId, setReflleId, contestId, setContestId, image, setImage }),
    [reflleId, contestId, image],
  );

  return (
    <ReflleContext.Provider value={value}>{children}</ReflleContext.Provider>
  );
}
