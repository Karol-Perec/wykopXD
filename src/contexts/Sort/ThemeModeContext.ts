import { createContext } from 'react';

export interface SortContextInterface {
  options: string[];
  activeOption?: string;
  setOptions: (newOptions: string[]) => void;
  setActiveOption: (activeOption: string) => void;
}

const SortContext = createContext<SortContextInterface>({
  setOptions: (newOptions: string[]) => {}, // eslint-disable-line
  setActiveOption: (activeOption: string) => {}, // eslint-disable-line
  options: [],
});

export default SortContext;
