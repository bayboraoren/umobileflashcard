import {ADD_NEW_DECK} from "../../app/AppActionTypes";
import {setDeckListAction} from "../decklist/deckListAction";
import {getAllDeck, saveDeck} from "../../utils/api";

export function addNewDeckAction(deck) {
    return {
        type: ADD_NEW_DECK,
        deck,
    }
}


export function handleAddNewDeck(deck) {
    return (dispatch) => {
        return saveDeck(deck).then(() =>
            getAllDeck().then((deckList) =>
                dispatch(setDeckListAction(deckList))))
    }
}