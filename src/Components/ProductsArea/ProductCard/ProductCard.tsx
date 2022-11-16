import "./ProductCard.css";
import ProductModel from "../../../Models/ProductModel";
import appConfig from "../../../Utils/AppConfig";
import {NavLink} from "react-router-dom";

interface ProductCardProps {
	product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box">
			<div>
                { props.product.name }
                <br />
                Price: {props.product.price}$
                <br />
                Stock: {props.product.stock}
            </div>
			<div>
                <NavLink to={"/products/details/" + props.product.id}>
                    <img src={appConfig.productImagesUrl + props.product.imageName} alt={"img"}/>
                </NavLink>
            </div>
        </div>
    );
}

export default ProductCard;
