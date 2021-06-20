import styled from 'styled-components';

export const SearchWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 30px 15px;

  width: 100%;
  margin-top: 40px;
`;

export const BookItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookImg = styled.img`
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const BookTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.black_680};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-bottom: 5px;
`;

export const BookAuthor = styled.h4`
  font-family: ${({ theme }) => theme.font.family.roboto};
  color: ${({ theme }) => theme.colors.black_680};
  font-weight: 900;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 30px 0;
`;

export const LoadMoreButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange_500};
  color: ${({ theme }) => theme.colors.white_500};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  border: 0;
  padding: 15px 45px;
  border-radius: 14px;
`;
