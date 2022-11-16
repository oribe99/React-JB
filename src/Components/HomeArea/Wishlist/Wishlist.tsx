import "./Wishlist.css";
import {ChangeEvent, useState} from "react";

function Wishlist(): JSX.Element {

    const [items, setItems] = useState<string[]>([]);
    const [item, setItem] = useState<string>("");

    function addItem(): void {
        setItems([...items, item]);
        setItem("")
    }

    function changed(args: ChangeEvent<HTMLInputElement>): void {
        setItem(args.target.value);
    }

    return (
        <div className="Wishlist Box">
			<p>Black Friday Wishlist: </p>
            <input value={item} onChange={changed}/>
            <button onClick={addItem}>Add</button>
            {/*must have keys in lists*/}
            Items: { items.map((item, index) => <span key={index}> { item } | </span>) }
        </div>
    );
}

export default Wishlist;
