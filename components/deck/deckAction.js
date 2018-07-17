import {SET_SELECTED_DECK} from "../../app/AppActionTypes";

export function setSelectedDeckAction (deck) {
    return {
        type: SET_SELECTED_DECK,
        deck,
    }
}



export function handleSetSelectedDeck(deck) {
    return (dispatch) => {
        return  dispatch(setSelectedDeckAction(deck))
    }
}