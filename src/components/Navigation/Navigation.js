import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/Auth/authSelectors";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink to="/"></NavLink>
            {isLoggedIn && (<NavLink to="/"></NavLink>)}
        </nav>
    );
};

export default Navigation;