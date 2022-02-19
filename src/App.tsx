import { useState } from 'react';
import styles from './App.module.css';
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/Task';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => {
      return task.id !== id;
    }))
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if (display) {
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add('hide');
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    hideOrShowModal(false);

  }

  return (
    <>
      <Modal children={<TaskForm btnText='Editar tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />} />
      <Header />
      <div className={styles.main}>
        <h2>O que você vai fazer?</h2>
        <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} backgoundForm='transparent' />
        <h2>Suas Tarefas</h2>
        <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
      </div>
      <Footer />
    </>
  );
}

export default App;
