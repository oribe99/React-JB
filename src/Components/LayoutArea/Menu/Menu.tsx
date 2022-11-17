import "./Menu.css";
import {NavLink} from "react-router-dom";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import TotalOutOfStock from "../../ProductsArea/TotalOutOfStock/TotalOutOfStock";
import authService from "../../../Services/AuthService";
import {useEffect, useState} from "react";
import {authStore} from "../../../Redux/AuthState";

function Menu(): JSX.Element {

    const [showCategories, setShowCategories] = useState<boolean>(authService.isLoggedIn);

    useEffect(() => {
        const unsubscribe = authStore.subscribe(() => { setShowCategories(authService.isLoggedIn)});
        return () => unsubscribe();
    }, []);

    return (
        <div className="Menu">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/employees"}>Employees</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            { showCategories && <NavLink to={"/categories"}>Categories</NavLink>}
            <TotalProducts />
            <TotalOutOfStock />
        </div>
    );
}

export default Menu;
