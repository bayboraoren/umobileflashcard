import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import {connect} from "react-redux";
import {getAllDeck} from "../../utils/api";
import {setDeckListAction} from "./deckListAction";
import DeckView from "./DeckView";


class DeckListView extends Component {

    componentDidMount() {
        const {dispatch} = this.props;

        getAllDeck()
            .then((decks) => dispatch(setDeckListAction(decks)))

    }


    render() {

        const {deckList,navigation} = this.props;

        return (
            <ScrollView>
                {Object.keys(deckList).map((deckId) => (
                    <DeckView key={deckId} deck={deckList[deckId]} navigation={this.props.navigation}/>
                ))}
            </ScrollView>
        )
    }

}

function mapStateToProps({deckList}) {
    return {
        deckList
    }
}

export default connect(mapStateToProps)(DeckListView)
