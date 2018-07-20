import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import {connect} from "react-redux";
import {clearDeck, getAllDeck} from "../../utils/api";
import {setDeckListAction} from "./deckListAction";
import DeckView from "../deck/DeckView";
import {purple} from "../../utils/colors";
import {Button} from "react-native-elements";


class DeckListView extends Component {

    componentDidMount() {
        const {dispatch} = this.props;

        getAllDeck()
            .then((decks) => dispatch(setDeckListAction(decks)))

    }


    render() {

        const {deckList, navigation} = this.props;

        return (
            <ScrollView>
                {Object.keys(deckList).map((deckId) => (
                    <DeckView key={deckId} deck={deckList[deckId]} navigation={this.props.navigation}/>
                ))}
                {Object.keys(deckList).length > 0 &&
                <Button
                    backgroundColor={purple}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='CLEAR DECKS'
                    onPress={() => clearDeck()}
                />
                }
            </ScrollView>
        )
    }

}

function mapStateToProps({deckList, selectedDeck}) {
    return {
        deckList,
        selectedDeck,
    }
}

export default connect(mapStateToProps)(DeckListView)
