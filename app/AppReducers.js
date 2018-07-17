import {combineReducers} from "redux";
import deckListReducer from "../components/decklist/deckListReducer";
import setSelectedDeckReducer from "../components/deck/deckReducer";

export default combineReducers({
    deckList: deckListReducer,
    selectedDeck : setSelectedDeckReducer
})