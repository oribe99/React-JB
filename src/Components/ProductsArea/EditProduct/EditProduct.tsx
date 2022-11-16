import "./EditProduct.css";
import ProductModel from "../../../Models/ProductModel";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import productsService from "../../../Services/ProductsService";
import notifyService from "../../../Services/NotifyService";
import {ChangeEvent, useEffect, useState} from "react";
import appConfig from "../../../Utils/AppConfig";

function EditProduct(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams();
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        const id = +params.id;
        productsService.getOneProduct(id)
            .then(product => {
                setValue("id", product.id);
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
                setImageUrl(appConfig.productImagesUrl + product.imageName);
            })
            .catch(err => notifyService.error(err));
    }, []);

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList).item(0);
            await productsService.updateProduct(product);
            notifyService.success("Product has been updated");
            navigate("/products/details/" + product.id);
        }
        catch (err: any) {
            notifyService.error(err);
        }
    }

    function changeImage(arg: ChangeEvent<HTMLInputElement>): void {
        const file = arg.target.files[0];
        if (!file) return;
        setImageUrl(URL.createObjectURL(file));
    }

    return (
        <div className="EditProduct Box">
            <h2>Edit Product</h2>

            <form onSubmit={handleSubmit(send)}>

                <input type={"hidden"} {...register("id")} />

                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)}/>
                <span> { formState.errors.name?.message } </span>

                <label>Price: </label>
                <input type={"number"} step={"0.01"} {...register("price", ProductModel.priceValidation)} />
                <span> { formState.errors.price?.message } </span>

                <label>Stock: </label>
                <input type="number" {...register("stock", ProductModel.stockValidation)}/>
                <span> { formState.errors.stock?.message } </span>


                <label>Image: </label>
                <input type={"file"} accept={"image/*"} {...register("image")} onChange={changeImage}/>
                <img src={imageUrl} alt={"img"}/>
                <span> { formState.errors.image?.message } </span>


                <button>Edit</button>
            </form>
        </div>
    );
}

export default EditProduct;
