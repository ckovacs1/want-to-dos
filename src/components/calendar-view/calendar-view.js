import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Box, Typography } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import { fetchTodosDay } from '../../api/todo';
import { checkDataIsEmpty } from '../../utils/array';
import { checkToday } from '../../utils/date';
import AlertInfo from '../common/alert-info';
import ListByDateSection from '../list-by-date/ListByDateSection';
import Addwanttodo from '../add-want-to-do/Addwanttodo';


function CalendarView(){

    const [ date, setDate ] = useState(new Date());
    const [ todos, setTodos ] = useState([]);

    const onChange = date => {
        setDate(date);
    }

    const fetchTodos = async () => {
        try {
            const data = await fetchTodosDay();
            setTodos(data);
        } catch (e) {
            // throw exception
            if (e.response.data.error === 'toDo not found') {
            setTodos([]);
            }
        }  
    };

    useEffect(() => {
        fetchTodos();
    }, []); 

    

    const todayTodos = todos.filter(todo => date === todo.startDate);
    
    return(
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '15px'}}>
                
                <Typography sx={{fontSize: '22pt', color:'#143aa2'}}> Calendar</Typography>
                <Calendar onChange={onChange} value={date} />
                <Typography sx={{color:'#143aa2', fontSize: '14pt'}}> Want-To-Dos for {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()} </Typography>
                
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                    <Box sx={{width: '800px'}}>
                        {checkDataIsEmpty(todayTodos) ? (
                            <AlertInfo content= "There is no wantToDo yet. How about adding a new wantToDo?" />
                        ) : (
                            <ListByDateSection todos={todayTodos} /> )}
                    </Box>
                    <Box>
                        <Addwanttodo />
                    </Box>
                </Box>
        
            </Box>
           
        </Box>
    )

}

export default CalendarView;
