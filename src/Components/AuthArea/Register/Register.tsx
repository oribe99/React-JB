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
                <input type={"text"} {...register("firstName")} />

                <label>Last name: </label>
                <input type={"text"} {...register("lastName")} />

                <label>Username: </label>
                <input type={"text"} {...register("username")} />

                <label>Password: </label>
                <input type={"password"} {...register("password")} />

                <button>Register</button>

            </form>
        </div>
    );
}

export default Register;
