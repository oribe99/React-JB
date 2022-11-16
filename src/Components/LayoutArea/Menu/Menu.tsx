import "./Menu.css";
import {NavLink} from "react-router-dom";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import TotalOutOfStock from "../../ProductsArea/TotalOutOfStock/TotalOutOfStock";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/employees"}>Employees</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <TotalProducts />
            <TotalOutOfStock />
        </div>
    );
}

export default Menu;
