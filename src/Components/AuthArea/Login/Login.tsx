import "./Login.css";
import {useForm} from "react-hook-form";
import notifyService from "../../../Services/NotifyService";
import authService from "../../../Services/AuthService";
import {useNavigate} from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import {authStore} from "../../../Redux/AuthState";

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
                <input type={"text"} {...register("username")} />

                <label>Password: </label>
                <input type={"password"} {...register("password")} />

                <button>Login</button>

            </form>
        </div>
    );
}

export default Register;
