import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #c9c9c9;
  outline: none;
  padding: 5px 30px 5px 10px;
  &::placeholder {
    font-size: 12px;
    color: #dddddd;
  }
`;

export const TextArea = styled.textarea`
  border-radius: 3px;
  border: 1px solid #c9c9c9;
  outline: none;
  padding: 5px 30px 5px 10px;
  &::placeholder {
    font-size: 12px;
    color: #dddddd;
  }
`;
