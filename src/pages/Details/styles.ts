import styled from 'styled-components';

export const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: 282px;
  margin-bottom: 67px;
  border-radius: 0px 0px 100px 0px;
  background: ${({ theme }) => theme.colors.yellow_200};

  display: flex;
  flex-direction: column;
`;
export const BackIconWrapper = styled.div`
  margin-top: 55px;
  margin-left: 33px;
`;

export const BookCoverWrapper = styled.div`
  width: 40%;
  margin: 15px auto -36px;
  display: flex;
  justify-content: center;
`;

export const BookContent = styled.main`
  padding: 0 20px;
`;

export const BookTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black_750};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  line-height: 2.9rem;
  letter-spacing: 1.5px;
  font-weight: normal;
  margin-bottom: 7px;

  & span.bold {
    font-weight: ${({ theme }) => theme.font.bold};
    font-size: inherit;
  }
`;

export const BookAuthor = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.orange_500};
  letter-spacing: 0.6px;
  margin-bottom: 10px;
`;

export const BookText = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  line-height: 2.5rem;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.black_650};
`;

export const FloatingButtonsWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 0 20px;
  margin-bottom: 50px;
`;

export const FloatingButtons = styled.div`
  border-radius: 2px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
`;

export const FloatingButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
  position: relative;

  & img {
    margin-right: 10px;
  }

  &.with-separator::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border: 1px solid rgba(151, 151, 151, 0.2);
  }

  &.with-separator::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    border: 1px solid rgba(151, 151, 151, 0.2);
  }
`;
