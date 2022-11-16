import "./BestSeller.css";
import {useState} from "react";

function BestSeller(): JSX.Element {

    const [name, setName] = useState<string>();
    const [totalItems, setTotalItems] = useState<number>();


    function show(): void {
        setName("Falafel");
        setTotalItems(10);
    }

    return (
        <div className="BestSeller Box">
			<button onClick={show}>Show Best Seller</button>
            <span>Name: {name}, Total Items: {totalItems}</span>
        </div>
    );
}

export default BestSeller;
