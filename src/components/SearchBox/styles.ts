import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: auto;
  max-width: 300px;
  background-color: #fff;

  border-radius: 24px;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  margin: 0 auto;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const TextInput = styled.input`
  height: 100%;
  width: 100%;
  margin-left: 15px;
`;
