import { createContext, useState } from "react";
import { getStorageItem, removeStorageItem, setStorageItem } from "./utils/storage";


export const AuthContext = createContext(false);


// create useAuth instead
export default function AuthProvider({ children }) {
    const [id, setId] = useState(() => getStorageItem('id'));
    const [name, setName] = useState(() => getStorageItem('name'));
    const [email, setEmail] = useState(() => getStorageItem('email'));
    const [isAdmin, setAdmin] = useState(() => getStorageItem('is_admin'));

    const signin = (data) => {
        setId(data['id'])
        setName(data['first_name']);
        setEmail(data['email']);
        setAdmin(data['is_admin']);

        const AuthValues = { id: data['id'], name: data['first_name'], email: data['email'], is_admin: data['is_admin'] };
        setStorageItem('auth', AuthValues);

        return true;
    };

    const signout = () => {
        setId(null);
        setName(null);
        setEmail(null);
        setAdmin(null);

        removeStorageItem('auth');
        return true;
    };

    let value = { id, isAdmin, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}