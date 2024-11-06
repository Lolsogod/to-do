import { useSelector } from 'react-redux';
import TodoList from 'src/components/Todo/TodoList/TodoList';
import { ClearType, selectActiveTodos, selectCompletedTodos, selectDeletedTodos, selectAllTodos } from 'src/store/todo';

export const AllTodos = () => {
  const todos = useSelector(selectAllTodos);
  return <TodoList todos={todos} type={ClearType.ALL} />;
};

export const ActiveTodos = () => {
  const todos = useSelector(selectActiveTodos);
  return <TodoList todos={todos} type={ClearType.ACTIVE} />;
};

export const CompletedTodos = () => {
  const todos = useSelector(selectCompletedTodos);
  return <TodoList todos={todos} type={ClearType.COMPLETED} />;
};

export const DeletedTodos = () => {
  const todos = useSelector(selectDeletedTodos);
  return <TodoList todos={todos} type={ClearType.DELETED} />;
};
