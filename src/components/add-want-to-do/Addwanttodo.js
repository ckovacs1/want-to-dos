import { SettingsBluetoothSharp } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import './Addwanttodo.css';
import { getUserFullname } from '../../utils/profile';
import { postTodo } from '../../api/todo';
import toast from 'react-hot-toast';

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      height: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
      width: 250,
      overflow: 'scroll',
    },
  },
};

const REPEAT_TYPE = {
  DAILY: 1,
  WEEKLY: 2,
  MONTHLY: 3,
};

const friends = [
  {
    _id: '1',
    name: {
      first: 'Van',
      last: 'Henry',
    },
  },
  {
    _id: '2',
    name: {
      first: 'April',
      last: 'Tucker',
    },
  },
  {
    _id: '3',
    name: {
      first: 'Ralph',
      last: 'Hubbard',
    },
  },
  {
    _id: '4',
    name: {
      first: 'Omar',
      last: 'Alexander',
    },
  },
  {
    _id: '5',
    name: {
      first: 'Omar',
      last: 'Alexander',
    },
  },
  {
    _id: '6',
    name: {
      first: 'Omar',
      last: 'Alexander',
    },
  },
];

function Addwanttodo() {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    startDateTime: dayjs('2022-11-01'),
    repetition: '',
    repeatType: null, //multiselect
    category: '', //select
    inviteFriends: [], //multi input and delete
  });

  const {
    title,
    description,
    startDateTime,
    repetition,
    repeatType,
    category,
    inviteFriends,
  } = inputs;

  //popup
  const [openPopup, setOpenPopup] = useState(false);

  const onPopupOpen = () => {
    setOpenPopup(true);
  };

  const onPopupClose = () => {
    setOpenPopup(false);
  };

  const onChangeInviteFriendsInput = e => {
    setInputs({
      ...inputs,
      inviteFriends: e.target.value,
    });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // api
  const createTodo = async () => {
    const data = {
      title,
      description, // assume it's not required
      startDateTime,
      repetition, // how many times repeat, 0 is not repeat
      repeatType, //daily = 1, weekly = 2, monthly = 3
      category,
    };

    try {
      const response = await postTodo(data);
      toast.success('Success to create');

      onPopupClose();
    } catch (e) {
      toast.error('Fail to success');
    }
  };

  const onClickAdd = () => {
    createTodo();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={onPopupOpen}
      >
        Add Task
      </Button>
      <Dialog
        onClose={onPopupClose}
        open={openPopup}
        maxWidth="xl"
      >
        <div className="addwanttodo__wrapper">
          <div className="addwanttodo__header">
            <div className="addwanttodo__header-title">Add wanttodo</div>
            <CloseIcon
              onClick={onPopupClose}
              sx={{ cursor: 'pointer' }}
            />
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
            <label className="addwanttodo__label">Starts on</label>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              className="addwanttodo__date-start-input"
            >
              <DatePicker
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
          <div className="addwanttodo__input-wrapper">
            <label className="addwanttodo__label">Repetition</label>
            <TextField
              type="number"
              name="repetition"
              label="Repetition"
              onChange={onChange}
              value={repetition}
              className="addwanttodo__title-input"
              sx={{ width: '70%' }}
            />
          </div>
          <div className="addwanttodo__input-wrapper">
            <label className="addwanttodo__label">Repeat Type</label>
            <FormControl sx={{ width: '150px' }}>
              <InputLabel id="repetition-select">Repeat Type</InputLabel>
              <Select
                labelId="repetition-select"
                value={repeatType}
                label="Repeat Type"
                name="repeatType"
                onChange={onChange}
              >
                <MenuItem value={REPEAT_TYPE.DAILY}>Daily</MenuItem>
                <MenuItem value={REPEAT_TYPE.WEEKLY}>Weekly</MenuItem>
                <MenuItem value={REPEAT_TYPE.MONTHLY}>Monthly</MenuItem>
              </Select>
            </FormControl>
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
            <FormControl sx={{ minWidth: '300px' }}>
              <InputLabel
                id="demo-multiple-chip-label"
                className="addwanttodo__label"
              >
                Invite Friends
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={inviteFriends}
                onChange={onChangeInviteFriendsInput}
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Chip"
                  />
                }
                renderValue={selected => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map(selectedId => {
                      const selectedFriend = friends.find(
                        friend => friend._id === selectedId,
                      );

                      return (
                        <Chip
                          key={selectedId}
                          label={getUserFullname(selectedFriend.name)}
                        />
                      );
                    })}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {friends.map(friend => (
                  <MenuItem
                    key={friend._id}
                    value={friend._id}
                    // style={getStyles(name, personName, theme)}
                  >
                    {getUserFullname(friend.name)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="addwanttodo__submit">
            <Button
              variant="contained"
              onClick={onClickAdd}
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
      </Dialog>
    </>
  );
}

export default Addwanttodo;
