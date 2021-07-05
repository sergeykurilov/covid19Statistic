import {ActionTypes} from "../constants";

export function logger({ getState }: any) {
    return (next:any) => (action: ActionTypes) => {
        console.log("Поступило действие - ", action);
        // Пропускаем это действие дальше по цепочке
        const returnValue = next(action);
        console.log("Состояние после выполенния Действия", getState());
        return returnValue;
    };
}
