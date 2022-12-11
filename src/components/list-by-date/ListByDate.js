import { Box, Button, Typography } from '@mui/material';
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { completeTodo, getTodos } from '../../api/todo';
import { checkDataIsEmpty } from '../../utils/array';
import { checkToday, checkTomorrow } from '../../utils/date';
import Addwanttodo from '../add-want-to-do/Addwanttodo';
import AlertInfo from '../common/alert-info';
import './ListByDate.css';

import ListByDateSection from './ListByDateSection';

function ListByDate() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (e) {
      // throw exception
      if (e.response.data.error === 'toDo not found') {
        setTodos([]);
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []); // called when mounted

  const setCompleteTodo = async (id, repeatIdx) => {
    try {
      const data = { repeatIdx };
      const response = await completeTodo(id, data);

      setTodos(
        todos.map(todo =>
          todo._id === id && todo.repeatIdx === repeatIdx
            ? { ...todo, complete: !todo.complete }
            : todo,
        ),
      );
    } catch (e) {
      toast.error('Error');
    }
  };

  const onClickComplete = (id, repeatIdx = null) => {
    setCompleteTodo(id, repeatIdx);
  };

  const todayTodos = todos.filter(todo => checkToday(todo.startDateTime));
  const tomorrowTodos = todos.filter(todo => checkTomorrow(todo.startDateTime));

  return (
    <div className="listbydate__container">
      <div className="listbydate__wrapper">
        <Typography
          variant="h5"
          className="primary"
        >
          List By Date
        </Typography>
        <div className="listbydate__date-wrapper">
          <div className="listbydate__date-header">
            <Typography
              variant="h7"
              className="primary"
            >
              Today
            </Typography>
          </div>
          {checkDataIsEmpty(todayTodos) ? (
            <AlertInfo content="There is no wantToDo yet. How about adding a new wantToDo?" />
          ) : (
            <ListByDateSection
              todos={todayTodos}
              onClickComplete={onClickComplete}
            />
          )}
        </div>
        {!checkDataIsEmpty(tomorrowTodos) && (
          <div className="listbydate__date-wrapper">
            <div className="listbydate__date-header">
              <Typography
                variant="h7"
                className="primary"
              >
                Tomorrow
              </Typography>
            </div>
            <ListByDateSection
              todos={tomorrowTodos}
              onClickComplete={onClickComplete}
            />
          </div>
        )}
      </div>
      <div className="listbydate__add-wrapper">
        <Addwanttodo fetchTodos={fetchTodos} />
      </div>
    </div>
  );
}

export default ListByDate;
