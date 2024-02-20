import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(false)

export default function AuthProvider({ children }) {
    const [id, setId] = useState(() => localStorage.getItem('id'));
    const [name, setName] = useState(() => localStorage.getItem('name'));
    const [email, setEmail] = useState(() => localStorage.getItem('email'));

    // navigate back to
    // navigator = useNavigate()

    const signin = (data) => {
        setId(data.id)
        setName(data.name);
        setEmail(data.email);
        
        localStorage.setItem('id', data.id ?? null);
        localStorage.setItem('name', data.name ?? null);
        localStorage.setItem('email', data.email ?? null);

        // callback();
        return true;
    };

    const signout = (callback = null) => {

        setId(null)
        setName(null);
        setEmail(null);
        
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('email');


        return true;

    };

    let value = { name, signin, signout };

    return (
        <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
    )
}
