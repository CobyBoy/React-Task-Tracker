import React, { useState } from 'react'
import { Paper, Checkbox, TextField, FormControlLabel, Button, Grid } from '@material-ui/core';
import useStyles from './styles'
import { toast } from 'react-toastify';

const Form = ({ onAdd}) => {
    const classes = useStyles();
    const [taskText, setTaskText] = useState('');
    const [taskDate, settaskDate] = useState("")
    const [reminder, setReminder] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText || !taskDate) {
            toast.error('Please complete all fields!', { position: toast.POSITION.BOTTOM_CENTER })
            return
        }
        onAdd({ taskText, taskDate, reminder })
        clearFields();
    }

    const clearFields = () => {
        setTaskText('');
        settaskDate('');
        setReminder(false);
    }
    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <form onSubmit={ handleSubmit }>
                    <Grid container spacing={ 3 }>
                        <Grid item xs={ 12 }>
                            <TextField name="task" variant="outlined" label="Task" fullWidth value={ taskText } onChange={ (e) => { setTaskText(e.target.value) } } />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField name="dayTime" label="Date" type="date" fullWidth InputLabelProps={ { shrink: true, } } value={ taskDate }
                                onChange={ (e) => { settaskDate(e.target.value) } } />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <FormControlLabel value="end" control={ <Checkbox color="primary" checked={ reminder } onChange={ (e) => { setReminder(e.target.checked) } } /> }
                                label="Set Reminder" labelPlacement="end"/>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Button color="primary" variant="contained" type="submit" fullWidth>Save task</Button>
                        </Grid>
                    </Grid>
                </form>
                
            </Paper>
            
        </>
    )
}

export default Form
