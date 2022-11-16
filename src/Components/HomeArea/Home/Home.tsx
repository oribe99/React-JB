import "./Home.css";
import Discount from "../Discount/Discount";
import Desserts from "../Desserts/Desserts";
import Sale from "../Sale/Sale";
import Survey from "../Survey/Survey";
import BestSeller from "../BestSeller/BestSeller";
import Tune from "../Tune/Tune";
import Search from "../Search/Search";
import Clock from "../Clock/Clock";
import Wishlist from "../Wishlist/Wishlist";
import Facebook from "../Facebook/Facebook";
import Orders from "../Orders/Orders";
import DayPartIcon from "../../SharedArea/DayPartIcon/DayPartIcon";
import usePageTitle from "../../../Utils/usePageTitle";
import Vat from "../Vat/Vat";

function Home(): JSX.Element {

    usePageTitle("HomePage");

    function handleSurvey(surveyReport: string) {
        alert("Survey result: " + surveyReport);
    }

    return (
        <div className="Home">
			<Discount />
            <Desserts />
            <Sale category="Beverages" percent={10} />
            <Sale category="Candies" percent={15} />
            <Survey handleSurvey={handleSurvey} surveyQuestion={"How is our service? "}/>
            <BestSeller/>
            <Tune/>
            <Search/>
            <Clock/>
            <Wishlist/>
            <Facebook />
            <Orders />
            <Vat percent={17}/>
        </div>
    );
}

export default Home;
