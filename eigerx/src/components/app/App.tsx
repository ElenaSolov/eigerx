import AuthPage from '../../pages/auth.page';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import TodosPage from '../../pages/todos.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="todos"
        element={
          <ProtectedRoute>
            <TodosPage />
          </ProtectedRoute>
        }
      />
        <Route path='*' element={<p>Not Found</p>} />
    </Routes>
  );
}

export default App;
