import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss'
import Navbar from 'src/components/Navbar/Navbar';
import AddTodo from 'src/components/Todo/AddTodo/AddTodo';

const TodoLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <AddTodo />
      <Outlet />
    </div>
  );
};

export default TodoLayout;