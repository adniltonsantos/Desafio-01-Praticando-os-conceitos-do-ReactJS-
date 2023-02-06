
import { useState } from 'react'
import uuid from 'react-uuid';
import { AddTask } from './components/AddTask'
import { Header } from './components/Header'
import { ListTasks } from './components/ListTasks'
import styles from './App.module.css'
import './global.css'

interface PropsTask {
  uuid: string,
  description : string,
  todo: boolean,
}



function App() {

  const [tasks , setTasks] = useState<PropsTask[]>([])


  function handleAddTask(data: string){
    const task = {
      uuid : uuid(),
      description: data,
      todo: true
    } as PropsTask

    setTasks([...tasks, task])
  }


    function handleDeleteTask(uuid : string){
     const taskWhithourDeleteOne = tasks.filter(task => {
      return uuid !== task.uuid
      })
      setTasks(taskWhithourDeleteOne)
    }

  return ( 
  
    <>
        <Header />
        <AddTask callBack={(data) => handleAddTask(data)}/> 
        <div className={styles.container}>
          <ListTasks tasks={tasks as any} onDeleteTask={handleDeleteTask} setTasks={setTasks}/>
      </div>
   </>
  )
}

export default App
