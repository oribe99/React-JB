import axios from "axios";
import appConfig from "../Utils/AppConfig";
import CategoryModel from "../Models/CategoryModel";

class CategoriesService {

    public async getAllCategories(): Promise<CategoryModel[]> {
        const response = await axios.get<CategoryModel[]>(appConfig.categoriesUrl);
        return response.data;
    }
}

const categoriesService = new CategoriesService();

export default categoriesService;