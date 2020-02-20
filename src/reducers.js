import { HISTORY, STOREAPIDATA, LOADING } from "./actions"


const defaultState = {
    value: 'f'
}
export function storeDefault(state=defaultState, action) {
    switch(action.type) {
        case HISTORY:
            return {
                // 
            }
        case LOADING: 
            return {
                // 
            }
        case STOREAPIDATA:
            return {
                // 
            }
    }
}