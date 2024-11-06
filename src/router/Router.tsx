import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from 'src/pages/Login/Login';
import TodoLayout from 'src/pages/Todo/TodoLayout';
import { AllTodos, ActiveTodos, CompletedTodos, DeletedTodos } from 'src/pages/Todo/TodoViews';
import PrivateRoute from './PrivateRoute';
import UnAuthedRoute from './UnAuthedRoute';
import NotFound from 'src/pages/NotFound/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <UnAuthedRoute>
            <Login />
          </UnAuthedRoute>
        } />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <TodoLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AllTodos />} />
          <Route path="active" element={<ActiveTodos />} />
          <Route path="completed" element={<CompletedTodos />} />
          <Route path="deleted" element={<DeletedTodos />} />
        </Route>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default Router;