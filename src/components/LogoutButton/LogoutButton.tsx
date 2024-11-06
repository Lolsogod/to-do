import { useDispatch } from 'react-redux';
import { logout } from 'src/store/auth';
import Button from 'src/components/ui/Button/Button';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return <Button onClick={handleLogout} variant='destructive'>Выйти</Button>;
};

export default LogoutButton;