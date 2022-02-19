import { ITask } from "../interfaces/Task";
import TaskItem from "./TaskItem";
import styles from './TaskList.module.css';

interface Props {
    taskList: ITask[];
    handleDelete(id: number): void;
}

const TaskList = ({ taskList, handleDelete }: Props) => {
    return (
        <div className={styles.list}>
            {taskList.length > 0
                ? (
                    taskList.map((task) => {
                        return (
                            <TaskItem task={task} handleDelete={handleDelete} />
                        )
                    })
                )
                : (
                    <p>Não existem tarefas cadastradas.</p>
                )
            }
        </div>
    )
}

export default TaskList;