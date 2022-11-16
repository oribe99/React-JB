import "./Survey.css";

interface SurveyProps {
    handleSurvey: (str: string) => void;
    surveyQuestion: string;
}

function Survey(props: SurveyProps): JSX.Element {

    function choice(choice: string) {
        props.handleSurvey(choice)
    }

    return (
        <div className="Survey Box">
			<span>{props.surveyQuestion}</span>
            <button onClick={() => choice("Poor")}>Poor</button>
            <button onClick={() => choice("Medium")}>Medium</button>
            <button onClick={() => choice("Good")}>Good</button>
        </div>
    );
}

export default Survey;
