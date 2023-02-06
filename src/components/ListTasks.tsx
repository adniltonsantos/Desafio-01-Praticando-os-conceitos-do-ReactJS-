import { Trash} from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CheckBox } from './CheckBox'
import styles from './ListTasks.module.css'
import emptyTask from './../assets/emptyTask.svg'

interface ITask {
    uuid: string,
    description: string, 
    todo: boolean
}
interface PropsTask {
    tasks: ITask[]
    onDeleteTask: (uuid: string) => void
    setTasks: (tasks : ITask[]) => void
}


export function  ListTasks({tasks , onDeleteTask, setTasks}: PropsTask){
    const [totalTaskDone , setTotalTaskDone] = useState(0)
    
    function onTotalTaskDone(){
        const filterTaskTodo = tasks.filter((task) => {
            return task.todo === false
        } )
        setTotalTaskDone(filterTaskTodo.length)
    }
    function taskDone(uuid : string){
        const filterTask = tasks.filter((task => {
            if(task.uuid === uuid){
               task.todo = !task.todo
            }
            return task
      
        })) 

        setTasks(filterTask)
        onTotalTaskDone()
    }
   


    function handleDeleteTask(uuid: string){
        onDeleteTask(uuid)
    }

    useEffect(()=>{
        onTotalTaskDone()
    },[tasks])

    return (
        <div className={styles.container}>
            <div className={styles.summary}>
                <div className={styles.taskCreate}>
                    <strong>Tarefas criadas</strong><span>{tasks.length}</span>
                </div>
                <div className={styles.taskCompleted}>
                    <strong>Concluídas</strong><span>{totalTaskDone} de {tasks.length}</span>
                </div>
            </div>
            {tasks?.length === 0 ? (
                <>
                <div className={styles.containerEmpty}>
                    <img src={emptyTask} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
                </>
                ): (
                    <>
                    {tasks.map((task) => {
                        return (
                            <div key={task.uuid} className={styles.task}>
                                <CheckBox label={task.description} onTaskDone={() => taskDone(task.uuid)}/>
                                <button onClick={() => handleDeleteTask(task.uuid)} title='Deletar cometário'>
                                    <Trash size={20} />
                                </button>
                            </div>
                            )}
                        )}
                    </>
                )}
   
         
          
            
        </div>
    )
}