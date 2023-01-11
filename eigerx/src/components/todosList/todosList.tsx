import { ITask } from '../../constants';

interface ITodoListProps {
  todos: Array<ITask>;
}
const TodosList = ({ todos }: ITodoListProps) => {
  return (
    <section>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.about}</p>
            <p>{todo.status}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default TodosList;
