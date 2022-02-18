import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className={styles.main}>
      <h2>O que você vai fazer?</h2>
      <TaskForm btnText='Criar tarefa' />
      <h2>Suas Tarefas</h2>
      <TaskList />
    </div>
  );
}

export default App;
