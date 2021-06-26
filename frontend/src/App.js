import React, { useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './styles'
import './App.css';
import Tasks from './components/Tasks/Tasks';

const App = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);

  const addTask = (task) => {
    console.log("task", task)
    const newTask =  {...task}
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  
  return (
    <>
        <Card className={classes.container}>
          <CardContent>
          <Header showForm={ () => setShowTasks(!showTasks) } addOrCloseText={ showTasks }/>
          { showTasks && <Form onAdd={ addTask}/> }
          { tasks.length ? (<Tasks tasks={ tasks }/>) : ('No tasks to show') }
          <ToastContainer autoClose={ 2000 } pauseOnHover={ false } />
        </CardContent>
        </Card>
    </>
    
    
  );
}

export default App;

