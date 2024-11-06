import type { TodoListProps } from './props';
import ClearTodos from '../ClearTodos/ClearTodos';
import TodoItem from '../TodoItem/TodoItem';
import styles from './styles.module.scss';

const TodoList = ({ todos, type }: TodoListProps) => {
  
  if (todos.length === 0) {
    return <div className={styles.empty}>Пусто</div>;
  }

  return (
    <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <ClearTodos type={type} />
    </div>
  );
};

export default TodoList;