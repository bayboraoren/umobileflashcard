import React, {Component} from 'react'
import {Button, Card, Text} from "react-native-elements";
import {purple} from "../../utils/colors";
import {connect} from "react-redux";
import {handleSetSelectedDeck} from "./deckAction";

class DeckView extends Component {

    render() {

        const {deck,handleSetSelectedDeck} = this.props

        const handleSelectDeck = () => {

            handleSetSelectedDeck(deck)

            this.props.navigation.navigate(
                'IndividualDeckView'
            )
        }


        return (
            <Card title={deck.name.toUpperCase()}>
                <Text style={{marginBottom: 10, textAlign: 'center'}}>
                    {deck.cards !== undefined && Object.keys(deck.cards).length > 1 ? Object.keys(deck.cards).length + ' cards' : Object.keys(deck.cards).length + ' card'}
                </Text>
                <Button
                    backgroundColor={purple}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW'
                    onPress={handleSelectDeck}
                />
            </Card>
        )
    }

}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps, {handleSetSelectedDeck})(DeckView)
