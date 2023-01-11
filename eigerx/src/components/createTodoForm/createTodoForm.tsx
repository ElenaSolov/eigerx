import { useState } from 'react';
import createTodoFormStyles from './createTodoForm.module.css';
import {
  initialStateTask as initialState,
  projectStatus,
  ITask
} from '../../constants';

interface ICreateTodoFormProps {
  addTask: (task: ITask) => void;
}

const CreateTodoForm = ({ addTask }: ICreateTodoFormProps) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (
    evt:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };
  const clearForm = () => {
    setForm(initialState);
  };
  const sendRegisterRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({ ...form, status: projectStatus.active });
    clearForm();
  };

  return (
    <form className={createTodoFormStyles.form} onSubmit={sendRegisterRequest}>
      <label className={createTodoFormStyles.label} htmlFor="title">
        Title
      </label>
      <input
        className={createTodoFormStyles.input}
        id="title"
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <label className={createTodoFormStyles.label} htmlFor="about">
        Description
      </label>
      <textarea
        className={`${createTodoFormStyles.input} ${createTodoFormStyles.about}`}
        id="about"
        name="about"
        value={form.about}
        onChange={handleChange}
      />

      <button className={createTodoFormStyles.submit} type="submit">
        Add Task
      </button>
    </form>
  );
};

export default CreateTodoForm;
