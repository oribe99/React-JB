import ProductModel from "../Models/ProductModel";
import axios from "axios";
import appConfig from "../Utils/AppConfig";
import {
    addProductsAction,
    deleteProductsAction,
    fetchProductsAction,
    productsStore, updateProductsAction
} from "../Redux/ProductsState";

class ProductsService {

    public async getAllProducts(): Promise<ProductModel[]> {
        let products = productsStore.getState().products;
        if (products.length === 0) {
            const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
            products = response.data;
            productsStore.dispatch(fetchProductsAction(products));
        }
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        let product = productsStore.getState().products.find(p => p.id === id);
        if (!product) {
            const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
            product = response.data;
        }
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const headers = { "Content-Type": "multipart/form-data" };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, {headers});
        const addedProduct = response.data;
        productsStore.dispatch(addProductsAction(addedProduct));
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete<ProductModel>(appConfig.productsUrl + id);
        productsStore.dispatch(deleteProductsAction(id));
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const headers = { "Content-Type": "multipart/form-data" };
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, {headers});
        const updatedProduct = response.data;
        productsStore.dispatch(updateProductsAction(updatedProduct));
    }
}

//Singleton
const productsService = new ProductsService();

export default productsService;