import "./AuthMenu.css";
import UserModel from "../../../Models/UserModel";
import {useEffect, useState} from "react";
import {authStore} from "../../../Redux/AuthState";
import {NavLink, useNavigate} from "react-router-dom";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel>();
    const navigate = useNavigate();

    useEffect(() => {
        setUser(authStore.getState().user);
        const unsubscribe = authStore.subscribe(() => setUser(authStore.getState().user))

        return () => unsubscribe(); // when component is destructed, cancel the redux subscription
    }, [])

    function logout() {
        authService.logout();
        navigate("/home")
        notifyService.success("Bye bye");
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
