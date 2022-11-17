import "./Register.css";
import UserModel from "../../../Models/UserModel";
import {useForm} from "react-hook-form";
import notifyService from "../../../Services/NotifyService";
import authService from "../../../Services/AuthService";
import {useNavigate} from "react-router-dom";

function Register(): JSX.Element {

    const {register, handleSubmit, formState} = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await authService.register(user);
            notifyService.success("Welcome " + user.firstName);
            navigate("/home");
        }
        catch (err: any) {
            notifyService.error(err)
        }

    }
    return (
        <div className="Register Box">
			<h2>Register</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>First name: </label>
                <input type={"text"} {...register("firstName", UserModel.firstNameValidation)} />
                <span> { formState.errors.firstName?.message } </span>

                <label>Last name: </label>
                <input type={"text"} {...register("lastName", UserModel.lastNameValidation)} />
                <span> { formState.errors.lastName?.message } </span>

                <label>Username: </label>
                <input type={"text"} {...register("username", UserModel.usernameValidation)} />
                <span> { formState.errors.username?.message } </span>

                <label>Password: </label>
                <input type={"password"} {...register("password", UserModel.passwordValidation)} />
                <span> { formState.errors.password?.message } </span>

                <button>Register</button>

            </form>
        </div>
    );
}

export default Register;
