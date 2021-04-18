//STORE ALANI //State'ler için depolama alanı gibi düşünülebilir.

import {createStore} from "redux"
import reducers from "./index";

export default function configureStore(){
    return createStore(reducers)
}