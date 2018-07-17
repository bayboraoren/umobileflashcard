import {saveCard} from "../../utils/api";
import {setDeckListAction} from "../decklist/deckListAction";

export function handleAddCard(deckId, card) {
    return (dispatch) => {
        return saveCard(deckId, card)
            .then((decks) => {
                dispatch(setDeckListAction(decks))
                return decks
            })
            .then((decks) => {
                return decks[deckId]
            })
    }
}