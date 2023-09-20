import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/Auth/authSelectors";


export const PrivateRoute = ({ component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};