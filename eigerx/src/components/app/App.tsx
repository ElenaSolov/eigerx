import AuthPage from '../../pages/auth.page';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import TodosPage from '../../pages/todos.page';
import {useState} from "react";


function App() {
const [user, setUser] = useState(()=>localStorage.getItem('email'))
    console.log(user)

   return (
       <Routes>
       <Route
           path="/"
           element={<AuthPage user={user}/>}
       />
    <Route
        path="todos"
        element={
            <ProtectedRoute>
                <TodosPage />
            </ProtectedRoute>
        }
    />
       </Routes>
   )
   ;
}

export default App;
