import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'src/store/todo';
import Input from 'src/components/ui/Input/Input';
import Button from 'src/components/ui/Button/Button';
import styles from './styles.module.scss';
const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        if (text) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (<div className={styles.container}>
        <Input type="text" value={text} onChange={handleInputChange} placeholder="Введите текст задачи..." />
        <Button onClick={handleAddTodo}>Добавить</Button>
    </div>)
};

export default AddTodo;