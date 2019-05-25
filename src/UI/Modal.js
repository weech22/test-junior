import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, TextArea } from './InputFields';
import Button from './Button';

const Wrap = styled.div`
  top: -20px;
  left: 150px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 30px;
  height: 400px;
  border: 1px solid #f4f4f4;
  border-radius: 2px;
  background: white;
  box-shadow: 1px 1px 5px 1px rgb(50, 50, 50, 0.5);
  z-index: 10;
  position: absolute;
`;

const TextField = styled(Input)`
  margin-bottom: 5px;
`;

const Description = styled(TextArea)`
  resize: none;
  margin-top: 25px;
`;

const ButtonBlock = styled.div`
  display: flex;
`;

const DissmissButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 21px;
  font-weight: 700;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  position: absolute;
  right: 5px;
  top: 5px;
`;

// onDayClick insert here values from the array if there are any
export default class extends Component {
  state = {
    name: '',
    participants: '',
    description: '',
  };

  inputHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = () => {
    const { day, addTask } = this.props;
    const { name, participants, description } = this.state;
    if (name && participants && description) {
      addTask(day.getTime(), {
        name,
        participants,
        description,
      });
    }
    // close modal
  };

  onDissmiss = () => {
    // close modal
  };

  render() {
    return (
      <Wrap>
        <DissmissButton>×</DissmissButton>
        <TextField
          placeholder="Событие"
          onChange={this.inputHandler}
          id="name"
        />

        <TextField
          placeholder="Имена участников"
          onChange={this.inputHandler}
          id="participants"
        />
        <Description
          rows={5}
          placeholder="Описание"
          onChange={this.inputHandler}
          id="description"
        />
        <ButtonBlock>
          <Button onClick={this.onSubmit}>Готово</Button>
          <Button>Удалить</Button>
        </ButtonBlock>
      </Wrap>
    );
  }
}
