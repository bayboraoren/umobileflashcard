import {SET_SELECTED_DECK} from "../../app/AppActionTypes";

function setSelectedDeckReducer (state = {}, action) {
    switch (action.type) {
        case SET_SELECTED_DECK :
            return {
                ...state,
                ...action.deck,
            }
        default :
            return state
    }
}

export default setSelectedDeckReducer