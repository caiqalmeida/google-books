import React from 'react';

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
} from './styles';

import InfoIcon from '../../assets/img/info_icon.svg';
import BookIcon from '../../assets/img/book_icon.svg';
import NewBookCover from '../../assets/img/book_hooked.svg';
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
      <Section>
        <SectionHeader>
          <SectionTitle>Discover new book</SectionTitle>
          <SectionLink>More</SectionLink>
        </SectionHeader>
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
            <img src={NewBookCover} alt="Book hooked cover" />
          </CardImageWrapper>
        </CardNewBook>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Currently Reading</SectionTitle>
          <SectionLink>All</SectionLink>
        </SectionHeader>
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
