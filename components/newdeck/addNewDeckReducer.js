import {ADD_NEW_DECK} from "../../app/AppActionTypes";

function addNewDeckReducer (state = {}, action) {
    switch (action.type) {
        case ADD_NEW_DECK :
            return {
                ...state,
                ...action.deck,
            }
        default :
            return state
    }
}

export default addNewDeckReducer()