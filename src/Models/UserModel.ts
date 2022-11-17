import {RegisterOptions} from "react-hook-form";

class UserModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public username: string;
    public password: string;


    public static firstNameValidation: RegisterOptions = {
        required: {value: true, message: "Missing name"},
        minLength: {value: 1, message: "Name too short"},
        maxLength: {value: 50, message: "Name too long"}
    };

    public static lastNameValidation: RegisterOptions = {
        required: {value: true, message: "Missing name"},
        minLength: {value: 1, message: "Name too short"},
        maxLength: {value: 50, message: "Name too long"}
    };

    public static usernameValidation: RegisterOptions = {
        required: {value: true, message: "Missing name"},
        minLength: {value: 5, message: "Name too short"},
        maxLength: {value: 50, message: "Name too long"}
    };

    public static passwordValidation: RegisterOptions = {
        required: {value: true, message: "Missing name"},
        minLength: {value: 5, message: "Name too short"},
        maxLength: {value: 50, message: "Name too long"}
    };
}

export default UserModel;
