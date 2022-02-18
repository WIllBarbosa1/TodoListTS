import { ITask } from "../interfaces/Task";
import TaskItem from "./TaskItem";
import styles from './TaskList.module.css';

interface Props {
    taskList: ITask[];
}

const TaskList = ({ taskList }: Props) => {
    return (
        <>
            {taskList.length > 0
                ? (
                    taskList.map((task) => {
                        return (
                            <TaskItem task={task} />
                        )
                    })
                )
                : (
                    <p>Não existem tarefas cadastradas.</p>
                )
            }
        </>
    )
}

export default TaskList;