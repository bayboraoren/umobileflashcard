import {getAllDeck} from "../../utils/api";
import {SET_DECK_LIST} from "../../app/AppActionTypes";

export function setDeckListAction (deckList) {
    return {
        type: SET_DECK_LIST,
        deckList,
    }
}


handleGetAllDeck = () => {
    getAllDeck()
        .then((decks) => {
            Object.keys(decks).map((deckId) => {
                console.log(decks[deckId].name)
            })
        })
}
