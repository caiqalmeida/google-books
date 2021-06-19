import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';

import { SearchWrapper, TextInput } from './styles';

const SearchBox = () => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setSearchValue(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      history.push('/search');
    }
  };

  return (
    <SearchWrapper>
      <AiOutlineSearch size={16} />
      <TextInput
        type="text"
        placeholder="Search book"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </SearchWrapper>
  );
};

export default SearchBox;
