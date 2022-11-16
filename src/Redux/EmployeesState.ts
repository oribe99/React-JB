import {createStore} from "redux";
import EmployeeModel from "../Models/EmployeeModel";

// 1. AppState - Data in app level
export class EmployeesState {
    public employees: EmployeeModel[] = [];
}

// 2. ActionType - what we can do on our state:
export enum EmployeesActionType {
    FetchEmployees = "FetchEmployees",
    AddEmployee = "AddEmployee",
    UpdateEmployee = "UpdateEmployee",
    DeleteEmployee = "DeleteEmployee"
}

// 3. Action - A single action on the state
export interface EmployeeAction {
    type: EmployeesActionType;
    payload: any; //any --> list of employees, single employee...
}

// 4. Action Creators - functions for creating Action objects - each for different ActionType
export function fetchEmployeeAction(employee: EmployeeModel[]): EmployeeAction {
    return { type: EmployeesActionType.FetchEmployees, payload: employee};
}

export function addEmployeeAction(product: EmployeeModel): EmployeeAction {
    return { type: EmployeesActionType.AddEmployee, payload: product};
}

export function updateEmployeeAction(product: EmployeeModel): EmployeeAction {
    return { type: EmployeesActionType.UpdateEmployee, payload: product};
}

export function deleteEmployeeAction(id: number): EmployeeAction {
    return { type: EmployeesActionType.DeleteEmployee, payload: id};
}

// 5. Reducer - perform the actual operation:
export function employeeReducer(currentState = new EmployeesState(), action: EmployeeAction): EmployeesState {
    const newState = {...currentState};

    switch (action.type) {
        case EmployeesActionType.FetchEmployees: // Here, the payload is the list of all employees.
            newState.employees = action.payload;
            break;
        case EmployeesActionType.AddEmployee: // Here, the payload is a new employee
            newState.employees.push(action.payload);
            break;
        case EmployeesActionType.UpdateEmployee: // Here, the payload is an existing employee
            const indexToUpdate = newState.employees.findIndex(e => e.id === action.payload.id);
            if (indexToUpdate >= 0) newState.employees[indexToUpdate] = action.payload;
            break;
        case EmployeesActionType.DeleteEmployee: //Here, the payload is employee id
            const indexToDelete = newState.employees.findIndex(e => e.id === action.payload);
            if (indexToDelete >=0) newState.employees.splice(indexToDelete, 1); // 1 = delete only one
            break;
    }

    return newState
}

// 6. Store - the managing object:
export const employeeStore = createStore(employeeReducer);