import { Search as SearchIcon } from '@mui/icons-material';
import * as S from './Search.styles';

const Search = () => {
  const xd = 'xd';

  return (
    <S.Search>
      <S.SearchIconWrapper>
        <SearchIcon />
      </S.SearchIconWrapper>
      <S.InputBase placeholder='Szukaj' inputProps={{ 'aria-label': 'search' }} />
    </S.Search>
  );
};

export default Search;
