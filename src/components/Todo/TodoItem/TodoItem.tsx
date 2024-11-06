import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, softDeleteTodo, restoreTodo } from 'src/store/todo/todoSlice';
import type { Todo } from 'src/store/todo';
import styles from './styles.module.scss';
import Button from 'src/components/ui/Button/Button';
import { CheckIcon, Undo2, Trash, CircleX, ArchiveRestore } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  const renderButtons = () => {
    if (todo.deleted) {
      return (
        <>
          <Button
            variant='destructive'
            onClick={() => dispatch(deleteTodo(todo.id))}
            title='Удалить'
          >
            <CircleX size={24}/>
          </Button>
          <Button
            variant='info'
            onClick={() => dispatch(restoreTodo(todo.id))}
            title='Восстановить'
          >
            <ArchiveRestore size={24}/>
          </Button>
        </>
      )
    }

    return (
      <>
        <Button
          onClick={() => dispatch(toggleComplete(todo.id))}
          title={todo.completed ? 'Отменить выполнение' : 'Отметить как выполненное'}
        >
          {todo.completed ? <Undo2 size={24} /> : <CheckIcon size={24} />}
        </Button>
        <Button
          variant='warning'
          onClick={() => dispatch(softDeleteTodo(todo.id))}
          title='В корзину'
        >
          <Trash size={24}/>
        </Button>
      </>
    )
  }


  return (
    <div className={styles.todoItem}>
      <span className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}>
        {todo.text}
      </span>
      <div className={styles.buttons}>
        {renderButtons()}
      </div>
    </div>
  );
};

export default TodoItem;