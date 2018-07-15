import React, {Component} from 'react'
import {ScrollView, Text} from 'react-native'
import {connect} from "react-redux";
import {getAllDeck} from "../../utils/api";
import {setDeckListAction} from "./deckListAction";
import {Card, List, ListItem} from "react-native-elements";


class DeckListView extends Component {

    componentDidMount() {
        const {dispatch} = this.props

        getAllDeck()
            .then((decks) => dispatch(setDeckListAction(decks)))

    }


    render() {

        const {deckList} = this.props

        return (
            <ScrollView>
                {Object.keys(deckList).map((deckId) => (
                    <Card title={deckList[deckId].name.toUpperCase()}>
                        <Text>
                            {deckList[deckId].cards.length} cards
                        </Text>
                    </Card>
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
