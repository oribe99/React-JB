import "./AuthMenu.css";
import UserModel from "../../../Models/UserModel";
import {useEffect, useState} from "react";
import {authStore} from "../../../Redux/AuthState";
import {NavLink, useNavigate} from "react-router-dom";
import authService from "../../../Services/AuthService";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel>();
    const navigate = useNavigate();

    useEffect(() => {
        setUser(authStore.getState().user);
    }, [])

    function logout() {
        authService.logout();
        navigate("/home")
    }

    if (user) {
        return (
            <div className="AuthMenu">
                <span>Hello {user.firstName} {user.lastName}</span>
                <span> | </span>
                <NavLink to={"/#"} onClick={logout}>Logout</NavLink>
            </div>
        )
    }

    return (
        <div className="AuthMenu">
            <div className="AuthMenu">
                <span>Hello guest</span>
                <span> | </span>
                <NavLink to={"/register"}>Register</NavLink>
                <span> | </span>
                <NavLink to={"/login"}>Login</NavLink>
            </div>
        </div>
    );
}

export default AuthMenu;
