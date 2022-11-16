import {ProductsAction, ProductsActionType} from "./ProductsState";

let counter =0;

export function countActions(productsStore: any) {
    return function (next: Function) {
        return function (action: ProductsAction) {
            console.log(`Current Action:  ${action.type}, Total Actions: ${++counter}`);
            //Here, store contains the current state (before dispatch)

            next(action); // Here the reducer will be invoked

            //Here, store contains the next state ( after dispatch)
        }
    }
}

export function addAction(productsStore: any) {
    return function (next: Function) {
        return function (action: ProductsAction) {
            if (action.type === ProductsActionType.AddProduct) {
                console.clear();
                console.log(action.payload);
            }

            next(action);
        }
    }
}