import axios from "axios";
import appConfig from "../Utils/AppConfig";
import EmployeeModel from "../Models/EmployeeModel";
import {EmployeesActionType, employeeStore} from "../Redux/EmployeesState";

class EmployeeService {

    public async getAllEmployees(): Promise<EmployeeModel[]> {
        let employees = employeeStore.getState().employees;
        if (employees.length ===0 ) {
            const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
            employees = response.data;
            employeeStore.dispatch({type: EmployeesActionType.FetchEmployees, payload: employees});
        }
        return employees;
    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id);
        return response.data;
    }

    public async removeEmployee(id: number): Promise<void> {
        await axios.delete<EmployeeModel>(appConfig.employeesUrl + id);
        employeeStore.dispatch({type: EmployeesActionType.DeleteEmployee, payload: id});
    }

}

//Singleton
const employeeService = new EmployeeService();

export default employeeService;