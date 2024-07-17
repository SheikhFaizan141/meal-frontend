import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(false)

export default function AuthProvider({ children }) {
    const [id, setId] = useState(() => localStorage.getItem('id') ?? null);
    const [name, setName] = useState(() => localStorage.getItem('name') ?? null);
    const [email, setEmail] = useState(() => localStorage.getItem('email') ?? null);

    const signin = (data) => {
        console.log(data);
        setId(data.id)
        setName(data.name);
        setEmail(data.email);

        localStorage.setItem('id', data.id ?? null);
        localStorage.setItem('name', data.name ?? null);
        localStorage.setItem('email', data.email ?? null);

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

    let value = { id, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}
