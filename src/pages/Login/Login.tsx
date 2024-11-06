import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'src/store/auth/authSlice'; 
import { AppDispatch } from 'src/store/store';
import styles from './styles.module.scss'
import Button from 'src/components/ui/Button/Button';
import Input from 'src/components/ui/Input/Input';

const Login = () => {
  const dispatch: AppDispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError('Заполните все поля');
      return;
    }

    dispatch(login({ username, password })).catch((error) => {
      setError(error.message);
    });
  };

  const renderError = () => {
    if (!error) {
      return null;
    }

    return <div className={styles.error}>{error}</div>;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вход в систему</h2>
      <form onSubmit={handleLogin}>
        <Input
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <Button type="submit">Войти</Button>
        {renderError()}
      </form>
    </div>
  );
};

export default Login;