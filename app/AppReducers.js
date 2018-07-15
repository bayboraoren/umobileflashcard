import {combineReducers} from "redux";
import deckListReducer from "../components/decklist/deckListReducer";

export default combineReducers({
    deckList: deckListReducer
})