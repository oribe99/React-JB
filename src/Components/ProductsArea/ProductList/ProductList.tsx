import "./ProductList.css";
import {useEffect, useState} from "react";
import productsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import {NavLink} from "react-router-dom";
import usePageTitle from "../../../Utils/usePageTitle";

function ProductList(): JSX.Element {

    usePageTitle("Product List");

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(products => setProducts(products))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="ProductList">

            { products.length === 0 && <div>Loading...</div>}
            <NavLink to={"/products/new"}>➕</NavLink>

            { products.map(product => <ProductCard key={product.id} product={product}/>) }
        </div>
    );
}

export default ProductList;
