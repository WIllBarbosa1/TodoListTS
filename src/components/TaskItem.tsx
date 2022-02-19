import { ITask } from "../interfaces/Task";
import styles from './TaskItem.module.css';

interface Props {
    task: ITask;
    handleDelete(id: number): void;
}

const TaskItem = ({ task, handleDelete }: Props) => {
    return (
        <div key={task.id} className={styles.task}>
            <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
                <i className="bi bi-pencil"></i>
                <i className="bi bi-trash" onClick={() => { handleDelete(task.id) }}></i>
            </div>
        </div>
    )
}

export default TaskItem;