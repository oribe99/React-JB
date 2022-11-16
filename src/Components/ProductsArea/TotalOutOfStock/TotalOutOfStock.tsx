import "./TotalOutOfStock.css";
import {useDispatch, useSelector} from "react-redux";
import {ProductsState} from "../../../Redux/ProductsState";

function TotalOutOfStock(): JSX.Element {

    const count: number = +useSelector<ProductsState>((productsState) => {
        return productsState.products.filter(p => +p.stock === 0).length;
    });

    // const dispatch = useDispatch(); // not in use in this component

    return (
        <div className="TotalOutOfStock Box">
	        <span>Total out of stock: { count } </span>
        </div>
    );
}

export default TotalOutOfStock;
