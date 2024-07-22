import { createContext, useState } from "react";
import { getStorageItem, removeStorageItem, setStorageItem } from "./utils/storage";


export const AuthContext = createContext(false);


// create useAuth instead
export default function AuthProvider({ children }) {
    const auth = getStorageItem('auth');

    const [id, setId] = useState(() => auth ? auth['id'] : null);
    const [name, setName] = useState(() => auth ? auth['name'] : null)
    const [email, setEmail] = useState(() => auth ? auth['eamil'] : null);
    const [isAdmin, setAdmin] = useState(() => auth ? auth['is_admin'] : null);

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

        const authValues = getStorageItem('auth');
        
        for(const key of Object.keys(authValues)) {
            console.log(key);
            authValues[key] = '';
        }

        console.log(authValues);

        setStorageItem('auth', authValues);

        return true;
    };

    let value = { id, isAdmin, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}