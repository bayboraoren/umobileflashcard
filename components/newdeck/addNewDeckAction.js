import {setDeckListAction} from "../decklist/deckListAction";
import {getAllDeck, saveDeck} from "../../utils/api";


export function handleAddNewDeck(deck) {
    return (dispatch) => {
        return saveDeck(deck).then(() =>
            getAllDeck().then((deckList) =>
                dispatch(setDeckListAction(deckList))))
    }
}