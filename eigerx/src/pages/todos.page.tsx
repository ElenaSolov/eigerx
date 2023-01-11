import { useState } from 'react';
import CreateTodoForm from '../components/createTodoForm/createTodoForm';
import { ITask } from '../constants';
import TodosList from '../components/todosList/todosList';
import pageStyles from './pages.module.css';

const TodosPage = () => {
  const [todos, setTodos] = useState<Array<ITask>>(() =>
    JSON.parse(localStorage.getItem('todoList') || '[]')
  );
  const addTask = (task: ITask) => {
    setTodos([...todos, task]);
    localStorage.setItem('todoList', JSON.stringify(todos));
  };
  const clearTasks = () => {
    setTodos([]);
    localStorage.setItem('todoList', JSON.stringify([]));
  };
  return (
    <main>
      <h1>Welcome!</h1>
      <p>You can add a new task to your list with the form below:</p>
      <CreateTodoForm addTask={addTask} />
      {todos && todos.length ? (
        <>
          <TodosList todos={todos} />
          <button
            className={pageStyles.button}
            type="button"
            onClick={clearTasks}
          >
            Clear all tasks
          </button>
        </>
      ) : (
        <p className={pageStyles.text}> You do not have any tasks yet.</p>
      )}
    </main>
  );
};

export default TodosPage;
