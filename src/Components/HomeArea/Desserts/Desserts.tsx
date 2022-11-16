import "./Desserts.css";
import dessertImage from "../../../Assets/Images/ChocolatePie.jpg";
import {SyntheticEvent} from "react";

function Desserts(): JSX.Element {

    const items: { id: number, name: string }[] = [
        { id: 1, name: "Ice Cream"},
        { id: 2, name: "Chocolate Pie"},
        { id: 3, name: "Eclair"},
    ];

    function totalDesserts(args: SyntheticEvent): void {
        console.log(args.target);
        alert("Total desserts: " + items.length);
    }

    return (
        <div className="Desserts Box">
            <img alt={"chocolate pie"} src={dessertImage} />
            Our Desserts:
            { items.length === 0 && <span> No Desserts Today :(</span>}
            { items.length > 0 && items.map( item => <span key={item.id}> {item.name} 🎂</span>) }
            <button onClick={totalDesserts}>Total Desserts</button>
        </div>
    );
}

export default Desserts;
