import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SearchBar from './SearchBar';

const Wrap = styled.div`
  background: #f4f4f4;
  padding: 60px 40px 20px 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 180px;
`;

export default () => (
  <Wrap>
    <Div>
      <Button>Добавить</Button>
      <Button>Обновить</Button>
    </Div>
    <SearchBar />
  </Wrap>
);
