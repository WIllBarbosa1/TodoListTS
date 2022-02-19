import { useState } from 'react';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => {
      return task.id !== id;
    }))
  }

  return (
    <div className={styles.main}>
      <h2>O que você vai fazer?</h2>
      <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} />
      <h2>Suas Tarefas</h2>
      <TaskList taskList={taskList} handleDelete={deleteTask} />
    </div>
  );
}

export default App;
