import styled from 'styled-components';

export const SearchWrapper = styled.div`
  padding: 15px;
  width: auto;
  max-width: 336px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  background: #fdfcfc;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
`;

export const TextInput = styled.input`
  height: 100%;
  width: 100%;
  margin-left: 11px;
  color: #54565a;

  &::placeholder {
    color: #54565a;
  }
`;
