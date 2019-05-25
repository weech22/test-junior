import React from 'react';
import styled from 'styled-components';
import { Input } from '../UI/InputFields';
import magnifier from './magnifier.svg';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchBar = styled(Input)`
  margin-left: 10px;
`;

const Magnifier = styled.img`
  width: 16px;
  height: 16px;
`;

export default () => (
  <Wrap>
    <Magnifier src={magnifier} alt="search" />
    <SearchBar placeholder="Событие, дата или участник" />
  </Wrap>
);
