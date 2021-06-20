import React from 'react';

import { Link } from 'react-router-dom';

import {
  GreetingsWrapper,
  GreetingsTitle,
  GreetingsOrange,
  Emoji,
  Section,
  SectionHeader,
  SectionTitle,
  SectionLink,
  CardNewBook,
  CardNewBookPurple,
  CardContent,
  CardTitle,
  CardSubTitle,
  CardFooter,
  CardSmallText,
  CardImageWrapper,
  CardCurrentBook,
  CardImageWrapperOut,
  CardCurrentTitle,
  CardCurrentSubTitle,
  CardCurrentSmallText,
  CardCurrentFooter,
  ListOfBooks,
  SectionNewBook,
} from './styles';

import InfoIcon from '../../assets/img/info_icon.svg';
import BookIcon from '../../assets/img/book_icon.svg';
import HookedCover from '../../assets/img/book_hooked.svg';
import OneThingCover from '../../assets/img/book_one-thing.jpg';
import CurrentBookCover from '../../assets/img/book_originals.svg';
import VideoThumbnail from '../../assets/img/video_thumbnail.svg';

export const Home = () => {
  return (
    <>
      <GreetingsWrapper>
        <GreetingsTitle>
          Hi, <GreetingsOrange>Mehmed AL Fatih</GreetingsOrange>
        </GreetingsTitle>
        <Emoji>👋</Emoji>
      </GreetingsWrapper>

      <SectionNewBook>
        <SectionHeader>
          <SectionTitle>Discover new book</SectionTitle>
          <SectionLink>More</SectionLink>
        </SectionHeader>
        <ListOfBooks>
          <Link to="/details/dsz5AwAAQBAJ">
            <CardNewBook>
              <CardContent>
                <header>
                  <CardTitle>Hooked</CardTitle>
                  <CardSubTitle>Nir Eyal</CardSubTitle>
                </header>
                <CardFooter>
                  <img src={InfoIcon} alt="Info icon" />
                  <CardSmallText>
                    <span className="bold">120+ </span> Read Now
                  </CardSmallText>
                </CardFooter>
              </CardContent>
              <CardImageWrapper>
                <img src={HookedCover} alt="Book hooked cover" />
              </CardImageWrapper>
            </CardNewBook>
          </Link>
          <Link to="/details/94ScMQEACAAJ">
            <CardNewBookPurple>
              <CardContent>
                <header>
                  <CardTitle>The One Thing</CardTitle>
                  <CardSubTitle>Garry Keller</CardSubTitle>
                </header>
                <CardFooter>
                  <img src={InfoIcon} alt="Info icon" />
                  <CardSmallText>
                    <span className="bold">90+ </span> Read Now
                  </CardSmallText>
                </CardFooter>
              </CardContent>
              <CardImageWrapper>
                <img src={OneThingCover} alt="Book one thing cover" />
              </CardImageWrapper>
            </CardNewBookPurple>
          </Link>
        </ListOfBooks>
      </SectionNewBook>

      <Section>
        <SectionHeader>
          <SectionTitle>Currently Reading</SectionTitle>
          <SectionLink>All</SectionLink>
        </SectionHeader>
        <Link to="/details/eLRhDgAAQBAJ">
          <CardCurrentBook>
            <CardImageWrapperOut>
              <img src={CurrentBookCover} alt="Book originals cover" />
            </CardImageWrapperOut>
            <CardContent>
              <header>
                <CardCurrentTitle>Originals</CardCurrentTitle>
                <CardCurrentSubTitle>by Adam Grant</CardCurrentSubTitle>
              </header>
              <CardCurrentFooter>
                <img src={BookIcon} alt="Info icon" />
                <CardCurrentSmallText>
                  Chapter <span className="orange-bold">2</span> from 9 Read Now
                </CardCurrentSmallText>
              </CardCurrentFooter>
            </CardContent>
          </CardCurrentBook>
        </Link>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Reviews of The Days</SectionTitle>
          <SectionLink>All Video</SectionLink>
        </SectionHeader>
        <img src={VideoThumbnail} alt="Video Thumbnail" />
      </Section>
    </>
  );
};
