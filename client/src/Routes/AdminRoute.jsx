import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = (children) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <h1 className="text-xl my-56 font-semibold text-center">Loading...</h1>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/signIn' state={{ from: location }} replace />
}

export default AdminRoute;