import React, {Component} from 'react'
import {Button, Card, Text} from "react-native-elements";
import {purple} from "../../utils/colors";

class DeckView extends Component {

    render() {

        const {deck} = this.props

        return (
            <Card title={deck.name.toUpperCase()}>
                <Text style={{marginBottom: 10, textAlign: 'center'}}>
                    {deck.cards !== undefined ? deck.cards.length : '0'} cards
                </Text>
            </Card>
        )
    }

}

export default DeckView