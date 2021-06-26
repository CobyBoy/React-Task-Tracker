//import { useEffect, useState } from 'react';
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks"
import { AddTask } from "./components/AddTask"
import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import './App.css';


const App = () => {
  const [showAddtask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([{}]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    return data
  }

  //fetch individual task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    return data
  }

  //Add task 
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }
  //Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((eachTask) => eachTask.id !== id))
  }

  //Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const upTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(upTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddtask)} showAdd={showAddtask} />
      {showAddtask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
        ('No tasks to show')}
      <ToastContainer autoClose={2000} pauseOnHover={false} pauseOnFocusLoss={false} />
    </div>

  );
}

export default App;
