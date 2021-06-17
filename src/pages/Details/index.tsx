import React from 'react';

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
import BookCover from '../../assets/img/book_hooked_big.svg';
import BookOpenIcon from '../../assets/img/book-open_icon.svg';
import HeadphoneIcon from '../../assets/img/headphones_icon.svg';
import ShareIcon from '../../assets/img/share_icon.svg';

export const Details = () => {
  return (
    <PageWrapper>
      <Header>
        <BackIconWrapper>
          <img src={BackIcon} alt="Back icon" />
        </BackIconWrapper>
        <BookCoverWrapper>
          <img src={BookCover} alt="Book cover" />
        </BookCoverWrapper>
      </Header>

      <BookContent>
        <BookTitle>
          <span className="bold">Hooked</span> : How to Build Habid-Forming
          Products
        </BookTitle>
        <BookAuthor>Nir Eyal</BookAuthor>
        <BookText>
          How do successful companies create products people can’t put down? Why
          do some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?
        </BookText>
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
