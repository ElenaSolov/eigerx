import Form from "../components/form/form";
import pagesStyles from './pages.module.css';

const AuthPage = () => {

  return (
      <main className={pagesStyles.main}>
        <h1>Please log in</h1>
       <Form />
      </main>
  );
};

export default AuthPage;
