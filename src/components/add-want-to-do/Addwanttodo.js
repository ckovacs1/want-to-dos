import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';

function Addwanttodo() {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    startDateTime: dayjs('2022-11-01'),
    endDateTime: dayjs('2022-11-01'),
    repetition: '', //select
    repeatOn: [], //select multiselect
    category: '', //select
    inviteFriends: [], //multiselect
  });

  const {
    title,
    description,
    startDateTime,
    endDateTime,
    repetition,
    repeatOn,
    category,
    inviteFriends,
  } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <TextField
        type="text"
        name="title"
        label="Title"
        onChange={onChange}
        value={title}
      />
      <TextField
        type="text"
        name="description"
        label="Description"
        onChange={onChange}
        value={description}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={props => <TextField {...props} />}
          label="startDateTime"
          value={startDateTime}
          onChange={newValue => {
            setInputs({
              ...inputs,
              startDateTime: newValue,
            });
          }}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={props => <TextField {...props} />}
          label="endDateTime"
          value={endDateTime}
          onChange={newValue => {
            setInputs({
              ...inputs,
              endDateTime: newValue,
            });
          }}
        />
      </LocalizationProvider>
      <FormControl sx={{ width: '150px' }}>
        <InputLabel id="repetition-select">Repetition</InputLabel>
        <Select
          labelId="repetition=select"
          value={repetition}
          label="Repetition"
          name="repetition"
          onChange={onChange}
        >
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Addwanttodo;
