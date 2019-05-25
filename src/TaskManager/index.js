import React, { Component } from 'react';
import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import Modal from '../UI/Modal';
import './style.css';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

class TaskManager extends Component {
  state = {
    clickedDay: null,
    taskList: {},
  };

  dayClickHandler = (day) => {
    this.setState({ clickedDay: day });
  };

  addTask = (day, task) => {
    const { taskList } = this.state;
    const prevState = taskList;

    const newState = Object.assign(prevState, { [day]: task });

    this.setState({ taskList: newState });
  };

  // name first week here?
  renderDay = (day) => {
    const cellStyle = {};
    const dateStyle = {};
    const date = day.getDate();
    const { clickedDay, taskList } = this.state;
    const task = taskList[date];
    // array contains event
    if (task) {
      return (
        <div style={cellStyle}>
          <div style={dateStyle}>{date}</div>
          {clickedDay !== null && day.getTime() === clickedDay.getTime() && (
            <Modal
              day={day}
              addTask={this.addTask}
              name={task.name}
              participants={task.participants}
              description={task.description}
            />
          )}
        </div>
      );
    }
    return (
      // 2. no event
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {clickedDay !== null && day.getTime() === clickedDay.getTime() && (
          <Modal day={day} addTask={this.addTask} />
        )}
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
      <Wrap>
        <DayPicker
          showOutsideDays
          todayButton="Сегодня"
          onTodayButtonClick={() => {}}
          onDayClick={this.dayClickHandler}
          renderDay={this.renderDay}
        />
      </Wrap>
    );
  }
}

export default TaskManager;
