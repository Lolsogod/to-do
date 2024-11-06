import { useDispatch } from "react-redux";
import { clearTodos } from "src/store/todo/todoSlice";
import Button from "src/components/ui/Button/Button";
import { ClearTodosProps } from "./props";
import { clearTypeLabels } from "src/store/todo";
import styles from "./styles.module.scss";

const ClearTodos = ({type}: ClearTodosProps) => {
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearTodos(type));
    };
    return (
        <div className={styles.container}>
            <Button variant="destructive" onClick={handleClear}>Очистить {clearTypeLabels[type]}</Button>
        </div>
    );
};

export default ClearTodos;