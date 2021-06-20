import React, { useEffect, useState } from 'react';

import { RouteComponentProps, Link } from 'react-router-dom';
import parse from 'html-react-parser';

import {
  BackIconWrapper,
  BookAuthor,
  BookContent,
  BookCoverWrapper,
  BookText,
  BookTitle,
  FloatingButton,
  FloatingButtons,
  FloatingButtonsWrapper,
  Header,
  PageWrapper,
} from './styles';

import BackIcon from '../../assets/img/back_icon.svg';
import BookOpenIcon from '../../assets/img/book-open_icon.svg';
import HeadphoneIcon from '../../assets/img/headphones_icon.svg';
import ShareIcon from '../../assets/img/share_icon.svg';

interface MatchParams {
  bookId: string;
}

interface BookInterface {
  imageLinks: {
    thumbnail: string;
  };
  title: string;
  subtitle: string;
  authors: string[];
  description: string;
}

export const Details = ({ match }: RouteComponentProps<MatchParams>) => {
  const {
    params: { bookId },
  } = match;

  const [book, setBook] = useState<BookInterface | null>(null);

  useEffect(() => {
    async function getBook() {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      const data = await response.json();
      const bookData = data.volumeInfo;
      console.log('book', bookData);
      setBook(bookData);
    }
    getBook();
  }, [bookId]);

  return (
    <PageWrapper>
      <Header>
        <BackIconWrapper>
          <Link to="/">
            <img src={BackIcon} alt="Back icon" />
          </Link>
        </BackIconWrapper>
        <BookCoverWrapper>
          {/* book?.volumeInfo.imageLinks?.thumbnail ??
                        imagePlaceholder */}
          <img
            src={
              book?.imageLinks?.thumbnail ??
              'https://via.placeholder.com/161x234?text=No+Cover'
            }
            alt="Book cover"
          />
        </BookCoverWrapper>
      </Header>

      <BookContent>
        <BookTitle>
          <span className="bold">{book?.title}</span> : {book?.subtitle}
        </BookTitle>
        <BookAuthor>{book?.authors?.join(', ')}</BookAuthor>
        <BookText>{book ? parse(book.description) : ''}</BookText>
      </BookContent>

      <FloatingButtonsWrapper>
        <FloatingButtons>
          <FloatingButton>
            <img src={BookOpenIcon} alt="Read icon" />
            <span>Read</span>
          </FloatingButton>
          <FloatingButton className="with-separator">
            <img src={HeadphoneIcon} alt="Listen icon" />
            <span>Listen</span>
          </FloatingButton>
          <FloatingButton>
            <img src={ShareIcon} alt="Share icon" />
            <span>Share</span>
          </FloatingButton>
        </FloatingButtons>
      </FloatingButtonsWrapper>
    </PageWrapper>
  );
};
