import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/todos">Вернуться к списку задач</Link>
    </div>
  );
};

export default NotFound;