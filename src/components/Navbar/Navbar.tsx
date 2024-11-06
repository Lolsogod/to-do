import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import styles from './styles.module.scss';
import LogoutButton from 'src/components/LogoutButton/LogoutButton';

const Navbar = () => {
    const location = useLocation();
    const todos = useSelector((state: RootState) => state.todos.items);

    const getTodosCount = () => {
        return {
            all: todos.filter(todo => !todo.deleted).length,
            active: todos.filter(todo => !todo.completed && !todo.deleted).length,
            completed: todos.filter(todo => todo.completed && !todo.deleted).length,
            deleted: todos.filter(todo => todo.deleted).length
        };
    };

    const counts = getTodosCount();

    const isActive = (path: string): string => {
        return location.pathname === path ? styles.active : '';
    };

    return <nav className={styles.navigation}>
        <ul className={styles.navList}>
            <li><Link to="/todos" className={isActive('/todos')}>Все - {counts.all}</Link></li>
            <li><Link to="/todos/active" className={isActive('/todos/active')}>Активные - {counts.active}</Link></li>
            <li><Link to="/todos/completed" className={isActive('/todos/completed')}>Завершенные - {counts.completed}</Link></li>
            <li><Link to="/todos/deleted" className={isActive('/todos/deleted')}>Корзина - {counts.deleted}</Link></li>
            <li className={styles.logoutContainer}><LogoutButton /></li>
        </ul>
    </nav>;
};

export default Navbar;