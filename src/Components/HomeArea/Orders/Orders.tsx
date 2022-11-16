import "./Orders.css";
import BackgroundByHour from "../../SharedArea/BackgroundByHour/BackgroundByHour";

function Orders(): JSX.Element {
    return (
        <div className="Orders">
            <span>Delivery Hours: 09:00-21:00</span>
        </div>
    );
}

export default BackgroundByHour(Orders);
