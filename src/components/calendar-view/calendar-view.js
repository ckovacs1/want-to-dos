import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Box, Typography } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import {
  Route,
  Routes,
  useNavigate,
  useNavigation,
  redirect,
} from 'react-router-dom';
import './cal.css';
import Addwanttodo from '../add-want-to-do/Addwanttodo';
import { checkDataIsEmpty } from '../../utils/array';
import AlertInfo from '../common/alert-info';
import ListByDateSection from '../list-by-date/ListByDateSection';
import useTodos from '../../hook/useTodos';
import { checkSelectedDate } from '../../utils/date';

function CalendarView() {
  const [date, setDate] = useState(new Date());

  const { todos, fetchTodos, onClickComplete, onClickRemoveButton } =
    useTodos();

  const onChange = date => {
    setDate(date);
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      console.log('Reload successful');
      // navigate('/');
      // <Redirect to="/" />;
      return true;
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  const selectedTodos = todos.filter(todo =>
    checkSelectedDate(todo.startDateTime, date.toString()),
  );

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          columnGap: '15px',
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: '15px',
            pt: 6,
          }}
        >
          <Typography sx={{ fontSize: '22pt', color: '#143aa2' }}>
            {' '}
            Calendar
          </Typography>
          <Calendar
            className="react-calendar"
            onChange={onChange}
            value={date}
          />
        </Box>

        <Box
          sx={{
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 4,
          }}
        >
          <Typography sx={{ color: '#143aa2', fontSize: '14pt', pb: 1 }}>
            Want-To-Dos for {date.getMonth() + 1}/{date.getDate()}/
            {date.getFullYear()}{' '}
          </Typography>
          <Box sx={{ width: '100%', mb: 2 }}>
            {checkDataIsEmpty(selectedTodos) ? (
              <AlertInfo content="There is no wantToDo yet. How about adding a new wantToDo?" />
            ) : (
              <ListByDateSection
                todos={selectedTodos}
                onClickComplete={onClickComplete}
                onClickRemoveButton={onClickRemoveButton}
                sortByComplete
              />
            )}
          </Box>
          <Box>
            <Addwanttodo fetchTodos={fetchTodos} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CalendarView;
