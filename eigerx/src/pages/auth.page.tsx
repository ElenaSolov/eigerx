import Form from "../components/form/form";
import pagesStyles from './pages.module.css';

interface IAuthPageProps {
    user: string | null;
}
const AuthPage = ({user} : IAuthPageProps) => {

    return (
      <main className={pagesStyles.main}>
        <h1>Log In Page</h1>
          {user? <h2>{`Welcome back ${user}`}</h2>
          : <Form />}
      </main>
  );
};

export default AuthPage;
