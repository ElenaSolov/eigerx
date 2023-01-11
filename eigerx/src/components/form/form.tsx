import { useState } from "react";
import formStyles from './form.module.css';

const Form = () => {
    const initialState = {
        email: "",
        password: "",
    }

    const [form, setForm] = useState(initialState);

    const handleChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [evt.target.name]: evt.target.value });
    };
    const clearForm = () => {
        setForm(initialState);
        console.log(22, form)
    }

    const sendRegisterRequest = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem('email', form.email);
        console.log(form);
        clearForm();
    };

    return (
            <form className={formStyles.form} onSubmit={sendRegisterRequest}>
                <label className={formStyles.label} htmlFor="email">Email</label>
                <input
                    className={formStyles.input}
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <label className={formStyles.label} htmlFor="password">Password</label>
                <input
                    className={formStyles.input}
                    id="password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />

                <button
                    className={formStyles.submit}
                    type="submit"
                >
                    Login
                </button>
            </form>
    );
};

export default Form;
