import React from 'react';
import { useHistory } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';

import { useSearch } from '../../context/search';

import { SearchWrapper, TextInput } from './styles';

const SearchBox = () => {
  const history = useHistory();
  const {
    searchValue,
    setSearchValue,
    initialIndex,
    setInitialIndex,
    setSearchResults,
    updateBooks,
  } = useSearch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (initialIndex !== 0) setInitialIndex(0);
      setSearchResults([]);
      updateBooks(0, false);
    }
  };

  const handleClick = () => {
    if (history.location.pathname === '/') {
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
        onClick={handleClick}
      />
    </SearchWrapper>
  );
};

export default SearchBox;
