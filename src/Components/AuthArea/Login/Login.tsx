import "./Login.css";
import {useForm} from "react-hook-form";
import notifyService from "../../../Services/NotifyService";
import authService from "../../../Services/AuthService";
import {useNavigate} from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import {authStore} from "../../../Redux/AuthState";
import UserModel from "../../../Models/UserModel";

function Register(): JSX.Element {

    const {register, handleSubmit, formState} = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            notifyService.success("Welcome back! " + authStore.getState().user.firstName);
            navigate("/home");
        }
        catch (err: any) {
            notifyService.error(err)
        }

    }
    return (
        <div className="Login Box">
            <h2>Login</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>Username: </label>
                <input type={"text"} {...register("username", UserModel.usernameValidation)} />
                <span> { formState.errors.username?.message } </span>

                <label>Password: </label>
                <input type={"password"} {...register("password", UserModel.passwordValidation)} />
                <span> { formState.errors.password?.message } </span>

                <button>Login</button>

            </form>
        </div>
    );
}

export default Register;
