import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { ITask } from '../interfaces/Task';
import styles from './TaskForm.module.css';

interface Props {
    btnText: string;
}

const TaskForm = ({ btnText }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficult] = useState<number>(0);

    const addTaskHandler = () => {

    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        } else {
            setDifficult(parseInt(e.target.value));
        }
    };

    return (
        <form className={styles.form} onSubmit={addTaskHandler}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <input type="submit" value={btnText} />
            </div>
        </form>
    )
}

export default TaskForm;