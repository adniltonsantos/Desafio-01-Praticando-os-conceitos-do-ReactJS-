import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import styles from './AddTask.module.css'

interface Props {
    callBack : (data: string) => void
}
export function AddTask({callBack} : Props){
    const [newTaskText,setNewTaskText] = useState('')
    
    function handleTask(event :ChangeEvent<HTMLInputElement>){
        setNewTaskText(event.target.value)
    }

    function handleNewTask(){
        callBack(newTaskText)
        setNewTaskText('')
    }
    return (
        <div className={styles.container}>
            <input placeholder='Adicione uma nova tarefa' onChange={handleTask} value={newTaskText}/>
            <button onClick={handleNewTask} >Criar <PlusCircle size={26}  /></button>
        </div>
    )
}