import { ITask } from "../interfaces/Task";

interface Props {
    task: ITask;
}

const TaskItem = ({ task }: Props) => {
    return (
        <div key={task.id}>
            <div>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div>
                <i className="bi bi-pencil"></i>
                <i className="bi bi-trash"></i>
            </div>
        </div>
    )
}

export default TaskItem;