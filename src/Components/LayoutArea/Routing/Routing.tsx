import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import LoadableExport from 'react-loadable';
import EmployeeList from "../../EmployeeArea/EmployeeList/EmployeeList";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import CategoriesList from "../../CategoriesArea/CategoriesList/CategoriesList";

function Routing(): JSX.Element {

    const LazyAbout = LoadableExport({
       loader: () => import("../../AboutArea/About/About"),
       loading: () => { return null }
    });

    return (
        // fragment
        <>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to={"/home"} />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/about" element={<LazyAbout />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/categories" element={<CategoriesList />} />
                {/*Default Route*/}
                <Route path="/*" element={<PageNotFound />} />
                {/*Route with parameter*/}
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
            </Routes>
        </>
    );
}

export default Routing;
