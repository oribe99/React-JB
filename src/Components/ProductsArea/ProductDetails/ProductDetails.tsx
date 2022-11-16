import "./ProductDetails.css";
import {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import ProductsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductModel";
import appConfig from "../../../Utils/AppConfig";
import productsService from "../../../Services/ProductsService";
import notifyService from "../../../Services/NotifyService";

function ProductDetails(): JSX.Element {

    const params = useParams();
    const [product, setProduct] = useState<ProductModel>();
    const navigate = useNavigate();

    useEffect(() => {
        const id = +params.id;
        ProductsService.getOneProduct(id)
            .then(product => setProduct(product))
            .catch(err => console.log(err));
    }, []);

    async function deleteProduct() {
        try{
            const ok = window.confirm("Are you sure?");
            if (!ok) return;
            await productsService.deleteProduct(product.id);
            notifyService.success("Product has been deleted");
            navigate("/products");
        }
        catch (err: any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="ProductDetails">
            <h2>Product Details: </h2>

            { !product && <div>Loading...</div> }

            { product &&
                <>
                    <h3>Name: { product?.name }</h3>
                    <h3>Price: { product?.price }$ </h3>
                    <h3>Stock: { product?.stock }</h3>
                    <img src={appConfig.productImagesUrl + product?.imageName} alt={"img"}/>

                    <br />
                    <br />

                    <NavLink to={"/products"}>Back</NavLink>
                    <span> | </span>
                    <NavLink to={"#"} onClick={deleteProduct}>Delete</NavLink>
                    <span> | </span>
                    <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>
                </>
            }
        </div>
    );
}

export default ProductDetails;