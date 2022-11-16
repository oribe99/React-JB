import "./About.css";
import usePageTitle from "../../../Utils/usePageTitle";

function About(): JSX.Element {

    usePageTitle("About")

    return (
        <div className="About">
			About...
        </div>
    );
}

export default About;
