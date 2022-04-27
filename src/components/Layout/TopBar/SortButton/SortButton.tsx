import { Sort as SortIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import SortContext from '../../../../contexts/Sort/ThemeModeContext';

const SortButton = () => {
  const sortContext = useContext(SortContext);

  return (
    <IconButton onClick={() => sortContext.setOptions([])} color='inherit'>
      <SortIcon />
    </IconButton>
  );
};

export default SortButton;
