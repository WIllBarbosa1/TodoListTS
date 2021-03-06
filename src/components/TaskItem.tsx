import { ITask } from "../interfaces/Task";
import styles from './TaskItem.module.css';

interface Props {
    task: ITask;
    handleDelete(id: number): void;
    handleEdit(task: ITask): void;
}

const TaskItem = ({ task, handleDelete, handleEdit }: Props) => {
    return (
        <div key={task.id} className={styles.task}>
            <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
                <i className="bi bi-pencil" onClick={() => { handleEdit(task) }}></i>
                <i className="bi bi-trash" onClick={() => { handleDelete(task.id) }}></i>
            </div>
        </div>
    )
}

export default TaskItem;