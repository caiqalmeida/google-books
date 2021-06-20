import React from 'react';
import { Link } from 'react-router-dom';

import { useSearch, Book } from '../../context/search';
import {
  BookAuthor,
  BookItem,
  BookImg,
  BookTitle,
  SearchWrapper,
  ButtonWrapper,
  LoadMoreButton,
} from './styles';

export const Search = () => {
  const {
    searchResults,
    booksPerPage,
    initialIndex,
    setInitialIndex,
    updateBooks,
  } = useSearch();

  const handleClick = () => {
    const newIndex = initialIndex + booksPerPage;
    setInitialIndex(newIndex);
    updateBooks(newIndex, true);
  };

  return (
    <>
      <SearchWrapper>
        {searchResults.length > 0 &&
          searchResults.map((book: Book) => (
            <Link key={book.id} to={`/details/${book.id}`}>
              <BookItem>
                <BookImg src={book.image} alt={`${book.title} cover"`} />
                <BookTitle>{book.title}</BookTitle>
                <BookAuthor>by {book.author}</BookAuthor>
              </BookItem>
            </Link>
          ))}
      </SearchWrapper>
      {searchResults.length > 0 && (
        <ButtonWrapper>
          <LoadMoreButton type="button" onClick={handleClick}>
            Load more
          </LoadMoreButton>
        </ButtonWrapper>
      )}
    </>
  );
};
