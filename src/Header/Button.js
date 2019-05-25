import React from 'react';
import styled from 'styled-components';

const Wrap = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: #006fca;
  color: white;
  font-weight: bold;
  padding: 5px 7px;
  border-radius: 3px;
`;

export default ({ children }) => <Wrap>{children}</Wrap>;
