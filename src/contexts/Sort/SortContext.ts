import { createContext } from 'react';

export interface SortContextInterface {
  options: string[];
  activeOption?: string;
  setOptions: (newOptions: string[]) => void;
  setActiveOption: (activeOption: string) => void;
}

const SortContext = createContext<SortContextInterface>({
  setOptions: () => {}, // eslint-disable-line
  setActiveOption: () => {}, // eslint-disable-line
  options: [],
});

export default SortContext;
