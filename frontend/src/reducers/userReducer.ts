import { reducerActionType } from "../types/reducerActionTypes";
export type UserType = {
    name: string;
    age: number;
    logged: boolean;
}

export const userInitialState: UserType = {
    name: 'teste',
    age: 0,
    logged: false
}

export const userReducer = (state: UserType, action: reducerActionType) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name};
        break
        case 'CHANGE_AGE':
            return {...state, age: action.payload.age};
        break
        case 'CHANGE_AUTH':
            return {...state, logged: action.payload.logged};
        break
    }
    
    return state
}