import {SET_DECK_LIST} from "../../app/AppActionTypes";

function deckListReducer (state = {}, action) {
    switch (action.type) {
        case SET_DECK_LIST :
            return {
                ...state,
                ...action.deckList,
            }
        default :
            return state
    }
}

export default deckListReducer