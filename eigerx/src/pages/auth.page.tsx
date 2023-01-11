import LoginForm from '../components/loginForm/loginForm';
import pagesStyles from './pages.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [user, setUser] = useState(() => localStorage.getItem('email'));

  return (
    <main className={pagesStyles.main}>
      <h1>Log In Page</h1>
      {user ? (
        <>
          <h2>{`Welcome back ${user}`}</h2>
          <Link to="/todos" className={pagesStyles.link}>
            View my todo list
          </Link>
        </>
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </main>
  );
};

export default AuthPage;
