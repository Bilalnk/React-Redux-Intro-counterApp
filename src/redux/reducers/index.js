import {combineReducers} from "redux"
import counterReducer from "./counterReducer"

//bura reducerların toplandığı, bir araya getirildiği yer
//Eğer bir tane daha reducer'ımız olursa virgül ile ayrılır

const reducers = combineReducers({
    myCounterReducer: counterReducer,
     // counterReducer: counterReducer
});

export default reducers;