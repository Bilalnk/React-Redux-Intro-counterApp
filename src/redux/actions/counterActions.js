import * as actionTypes from "./actionTypes"

//her bir fonksiyon birer obje döndürüyor.

/*
    --javada 
    A obje = new A();

    --A objesinin Classı'da;
    Class A {
        ActionTypes type = ActionTypes.INCREASE_COUNTER
        int payload = 1
    }
*/

//export public anlamındadır. 
export const increaseCounter = () => ({
    type: actionTypes.INCREASE_COUNTER,
    payload: 1
})

export const decreaseCounter = () => ({
    type: actionTypes.DECREASE_COUNTER,
    payload: 1
})

export const increaseByTwoCounter = () => ({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2
})

export const decreaseByTwoCounter = () => ({
    type: actionTypes.DECREASE_BY_TWO_COUNTER,
    payload: 2
})
