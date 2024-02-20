import { useContext } from "react"
import { AuthContext } from "../AuthProvider"
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
    const auth = useContext(AuthContext);
    const value = Boolean(auth.name);
    // const nav

    if (!value) {
        <Navigate to={'/login'} />
    }

    return children;
}
