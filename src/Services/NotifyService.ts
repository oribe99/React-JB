import { Notyf } from "notyf";

class NotifyService {
    private notyf = new Notyf({
        duration: 3000,
        dismissible: true,
        position: {x: "center", y: "top"}
    });

    public success(message: string) : void {
        this.notyf.success(message);
    }

    public error(err: any) : void {
        const message = this.getError(err);
        this.notyf.error(message);
    }

    private getError(err:any): string {

        // throw "some error"
        if(typeof err === "string") return err;

        //axios wrap a string error
        if (typeof err.response?.data === "string") return err.response.data;

        // axios wrap a string array error
        if (Array.isArray(err.response?.data)) return err.response.data[0];

        //throw new Error(...)
        if (typeof err.message === "string") return err.message;

        return "Some error, please try again";
    }
}

const notifyService = new NotifyService();

export default notifyService;
