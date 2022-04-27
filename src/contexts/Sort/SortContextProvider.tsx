import { PropsWithChildren, useMemo, useState } from 'react';
import SortContext from './ThemeModeContext';

const SortContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [options, setStateOptions] = useState<string[]>([]);
  const [activeOption, setStateActiveOption] = useState<string>();

  const setOptions = (newOptions: string[]) => setStateOptions(newOptions);

  const setActiveOption = (newActiveOption: string) => setStateActiveOption(newActiveOption);

  const context = useMemo(
    () => ({ options, activeOption, setOptions, setActiveOption }),
    [options, activeOption]
  );

  return <SortContext.Provider value={context}>{children}</SortContext.Provider>;
};

export default SortContextProvider;
