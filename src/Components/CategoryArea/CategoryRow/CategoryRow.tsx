import "./CategoryRow.css";
import CategoryModel from "../../../Models/CategoryModel";
import appConfig from "../../../Utils/AppConfig";

interface CategoryRowProps {
	category: CategoryModel;
}

function CategoryRow(props: CategoryRowProps): JSX.Element {

    return (
            <tr className={"CategoryRow"}>
                <td>{props.category.name}</td>
                <td>{props.category.description}</td>
                <td><img src={appConfig.categoriesImagesUrl + props.category.imageName} /></td>
            </tr>
    );
}

export default CategoryRow;
