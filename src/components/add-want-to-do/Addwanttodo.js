import { SettingsBluetoothSharp } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import './Addwanttodo.css';

const DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

function Addwanttodo() {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    startDateTime: dayjs('2022-11-01'),
    endDateTime: dayjs('2022-11-01'),
    repetition: '', //select
    repeatOn: [], //multiselect
    category: '', //select
    inviteFriends: [], //multi input and delete
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

  //popup
  const [openPopup, setOpenPopup] = useState(false);

  const onPopupOpen = () => {
    setOpenPopup(true);
  };

  const onPopupClose = () => {
    console.log('onPopupClose');
    setOpenPopup(false);
  };

  //usestate for invitefriends
  const [inviteFriendsInput, setInviteFriendsInput] = useState('');

  const onChangeInviteFriendsInput = e => {
    setInviteFriendsInput(e.target.value);
  };

  const onKeydownInviteFriendsInput = e => {
    if (e.key === 'Enter') {
      setInputs({
        ...inputs,
        inviteFriends: [...inviteFriends, inviteFriendsInput],
      });
      setInviteFriendsInput('');
    }
  };

  const onDeleteInviteFriend = target => {
    setInputs({
      ...inputs,
      inviteFriends: inviteFriends.filter(friend => friend !== target),
    });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickRepeatOnButton = day => {
    if (repeatOn.includes(day)) {
      //delete from array
      setInputs({
        ...inputs,
        repeatOn: repeatOn.filter(d => d !== day),
      });
    } else {
      //add to array
      setInputs({
        ...inputs,
        repeatOn: [...repeatOn, day],
      });
    }
  };

  if (!openPopup) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div className="addwanttodo__wrapper">
        <div className="addwanttodo__header">
          <div className="addwanttodo__header-title">Add wanttodo</div>
          <CloseIcon onClick={onPopupClose} />
        </div>

        <div className="addwanttodo__input-wrapper">
          <label className="addwanttodo__label">Title</label>
          <TextField
            type="text"
            name="title"
            label="Title"
            onChange={onChange}
            value={title}
            className="addwanttodo__title-input"
            sx={{ width: '70%' }}
          />
        </div>
        <div className="addwanttodo__input-wrapper">
          <label className="addwanttodo__label">Description</label>
          <TextField
            type="text"
            name="description"
            label="Description"
            onChange={onChange}
            value={description}
            className="addwanttodo__description-input"
            sx={{ width: '70%' }}
          />
        </div>
        <div className="addwanttodo__input-wrapper">
          <div className="addwanttodo__input-wrapper-inner">
            <label className="addwanttodo__label">Starts on</label>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              className="addwanttodo__date-start-input"
            >
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
          </div>
          <div className="addwanttodo__input-wrapper-inner">
            <label className="addwanttodo__label">Ends on</label>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              className="addwanttodo__date-end-input"
            >
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
          </div>
        </div>

        <div className="addwanttodo__input-wrapper">
          <label className="addwanttodo__label">Repetition</label>
          <FormControl sx={{ width: '150px' }}>
            <InputLabel id="repetition-select">Repetition</InputLabel>
            <Select
              labelId="repetition-select"
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
        <div className="addwanttodo__input-wrapper">
          <label className="addwanttodo__label">Repeat on</label>
          <div className="addwanttodo__repeaton-buttons">
            {DAYS.map(day => (
              <Button
                variant={repeatOn.includes(day) ? 'contained' : 'outlined'}
                sx={{ mx: 0.5 }}
                onClick={() => onClickRepeatOnButton(day)}
                key={day}
              >
                {day}
              </Button>
            ))}
          </div>
        </div>
        <div className="addwanttodo__input-wrapper">
          <label className="addwanttodo__label">Category</label>
          <FormControl sx={{ width: '150px' }}>
            <InputLabel id="category-select">Category</InputLabel>
            <Select
              labelId="category-select"
              value={category}
              label="Category"
              name="category"
              onChange={onChange}
            >
              <MenuItem value="fitness">Fitness</MenuItem>
              <MenuItem value="nutrition/diet">Nutrition/Diet</MenuItem>
              <MenuItem value="lifestyle">Lifestyle</MenuItem>
              <MenuItem value="skills/learning">Skills/Learning</MenuItem>
              <MenuItem value="mindfulness">Mindfulness</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="addwanttodo__input-wrapper">
          <label className="addwanttodo__label">Invite Friends</label>
          <TextField
            type="text"
            label="Invite Friends"
            onChange={onChangeInviteFriendsInput}
            onKeyDown={onKeydownInviteFriendsInput}
            value={inviteFriendsInput}
            sx={{ mr: 0.5 }}
          />
          {inviteFriends.map(friend => (
            <Chip
              key={friend}
              label={friend}
              variant="outlined"
              onDelete={() => onDeleteInviteFriend(friend)}
              sx={{ mx: 0.5 }}
            />
            //add validate id later
          ))}
        </div>

        <div className="addwanttodo__submit">
          <Button
            variant="contained"
            onClick={() => {}}
          >
            {' '}
            Add{' '}
          </Button>
          <Button
            variant="outlined"
            onClick={onPopupClose}
          >
            {' '}
            Cancel
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default Addwanttodo;
