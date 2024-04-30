import { useContext } from "react"
import { AuthContext } from "../Context/AuthProviders"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h1 className="text-xl my-56 font-semibold text-center">Loading...</h1>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/signIn' />
}

export default PrivateRoute