import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Box, Typography } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import Addwanttodo from '../add-want-to-do/Addwanttodo';


function CalendarView(){

    const [ date, setDate ] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }
  
    return(
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '15px'}}>
                
                <Typography sx={{fontSize: '22pt', color:'#143aa2'}}> Calendar</Typography>
                <Calendar onChange={onChange} value={date} />
                <Typography sx={{color:'#143aa2', fontSize: '14pt'}}> Want-To-Dos for {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()} </Typography>
                
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                    <Box sx={{width: '800px'}}>
                        
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
