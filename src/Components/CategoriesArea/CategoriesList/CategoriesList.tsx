import "./CategoriesList.css";
import {useEffect, useState} from "react";
import CategoryModel from "../../../Models/CategoryModel";
import CategoryRow from "../../CategoryArea/CategoryRow/CategoryRow";
import categoriesService from "../../../Services/CategoriesService";
import notifyService from "../../../Services/NotifyService";

function CategoriesList(): JSX.Element {

    const [categories, setCategories] = useState<CategoryModel[]>([]);

    useEffect(() => {
        categoriesService.getAllCategories()
            .then(categories => setCategories(categories))
            .catch(err => notifyService.error(err));
    }, []);

    return (
        <div className="CategoriesList">
            <table>
                <thead>
                <tr>
                    <th>Category Name</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {categories.map(c => <CategoryRow key={c.id} category={c} ></CategoryRow> )}
                </tbody>
            </table>
        </div>
    );
}

export default CategoriesList;
