import React, { createContext, useState, useContext } from 'react';

export interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
}

interface ContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
  searchResults: Book[];
  setSearchResults: (array: []) => void;
  initialIndex: number;
  setInitialIndex: (number: number) => void;
  updateBooks: (index: number, isLoadMonge: boolean) => void;
  booksPerPage: number;
}

const SearchContext = createContext<ContextType>({} as ContextType);

const SearchProvider: React.FC = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);

  const booksPerPage = 6;

  async function updateBooks(index: number, isLoadMore: boolean) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&startIndex=${index}`
    );

    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const { items } = data;
      // TODO: Type api response
      const results = items.map((book: any) => {
        const image = book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.smallThumbnail
          : 'https://via.placeholder.com/99x143?text=No+Cover';

        const author = book.volumeInfo.authors
          ? book.volumeInfo.authors[0]
          : 'Unknown author';

        return {
          id: book.id,
          title: book.volumeInfo.title,
          author: author,
          image: image,
        };
      });

      if (isLoadMore) {
        setSearchResults(searchResults.concat(results));
      } else {
        setSearchResults(results);
      }
    }
  }

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchResults,
        setSearchResults,
        initialIndex,
        setInitialIndex,
        updateBooks,
        booksPerPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('useSearch must be used within SearchProvider');

  const {
    searchValue,
    setSearchValue,
    searchResults,
    setSearchResults,
    initialIndex,
    setInitialIndex,
    updateBooks,
    booksPerPage,
  } = context;
  return {
    searchValue,
    setSearchValue,
    searchResults,
    setSearchResults,
    initialIndex,
    setInitialIndex,
    updateBooks,
    booksPerPage,
  };
};
export default SearchProvider;
