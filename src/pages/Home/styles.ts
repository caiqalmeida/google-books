import styled from 'styled-components';
import FloatingGeometric from '../../assets/img/floating_geometric_card_home.svg';

export const GreetingsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const GreetingsTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.colors.black_500};
`;

export const GreetingsOrange = styled.span`
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.orange_500};
  font-size: inherit;
`;

export const Emoji = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  margin-left: 11px;
`;

export const Section = styled.section`
  margin: 30px auto;
`;

export const SectionNewBook = styled.section`
  margin: 30px auto;
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.black_600};
`;

export const SectionLink = styled.a`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.blue_500};
`;

export const ListOfBooks = styled.div`
  display: flex;

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardNewBook = styled.div`
  min-width: 272px;
  margin-right: 10px;
  height: 139px;
  padding: 15px 20px;
  background: #00173d;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;

  display: flex;
  justify-content: space-between;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.header``;

export const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.playfair};
  font-weight: 700;
  font-size: 2.7rem;
  color: ${({ theme }) => theme.colors.white_500};
  letter-spacing: 2px;
  margin-bottom: 5px;
`;

export const CardSubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray_200};
  font-size: ${({ theme }) => theme.font.sizes.small};
  letter-spacing: 1.28px;
  font-style: italic;
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

export const CardSmallText = styled.p`
  font-weight: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.colors.gray_200};
  margin-left: 3px;

  & span.bold {
    font-weight: 700;
  }
`;

export const CardImageWrapper = styled.div`
  max-width: 26.4%;
  position: relative;

  img {
    border-radius: 5px;
    min-height: 109px;
    min-width: 73px;
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -36px;
    width: 100px;
    height: 100px;
    height: 100%;
    background-image: url(${FloatingGeometric});
    background-repeat: no-repeat;
  }
`;

export const CardCurrentBook = styled.div`
  margin-left: -24px;
  margin-top: 30px;
  width: 331px;
  height: 100px;
  padding: 10px 20px;
  display: flex;
  background: #eef5db;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
  border-radius: 0px 3px 3px 0px;
`;

export const CardImageWrapperOut = styled.div`
  height: 130px;
  position: relative;
  top: -25px;
  margin-right: 8px;
`;

export const CardCurrentTitle = styled(CardTitle)`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.black_800};
`;

export const CardCurrentSubTitle = styled(CardSubTitle)`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const CardCurrentFooter = styled(CardFooter)`
  margin-bottom: 0;
`;

export const CardCurrentSmallText = styled(CardSmallText)`
  color: ${({ theme }) => theme.colors.black_800};

  & span.orange-bold {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.orange_500};
  }
`;
