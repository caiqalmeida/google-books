import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { SearchWrapper, TextInput } from './styles';

const SearchBox = () => {
  return (
    <SearchWrapper>
      <AiOutlineSearch size={16} />
      <TextInput type="text" placeholder="Search book" />
    </SearchWrapper>
  );
};

export default SearchBox;
