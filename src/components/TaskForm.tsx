import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { ITask } from '../interfaces/Task';
import styles from './TaskForm.module.css';

interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    backgoundForm?: 'transparent';
    task?: ITask | null
    handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = ({ btnText, taskList, setTaskList, backgoundForm, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficult] = useState<number>(0);

    useEffect(() => {
        if (task) {
            setId(task.id);
            setDifficult(task.difficulty);
            setTitle(task.title);
        }
    }, [task]);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (handleUpdate) {
            handleUpdate(id, title, difficulty);
        } else {
            const id = Math.floor(Math.random() * 1000);
            const newTask: ITask = { id, title, difficulty }
            setTaskList!([...taskList, newTask]);

            setTitle('');
            setDifficult(0);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        } else {
            setDifficult(parseInt(e.target.value));
        }
    };

    return (
        <form className={`${styles.form} ${backgoundForm}`} onSubmit={addTaskHandler}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} value={title} />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange} value={difficulty} />
            </div>
            <div className={styles.input_container}>
                <input type="submit" value={btnText} />
            </div>
        </form>
    )
}

export default TaskForm;