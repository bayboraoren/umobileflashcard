import React, {Component} from 'react'
import {Button, Card, Text} from "react-native-elements";
import {purple} from "../../utils/colors";

class DeckView extends Component {

    render() {

        const {deck} = this.props

        return (
            <Card title={deck.name.toUpperCase()}>
                <Text style={{marginBottom: 10, textAlign: 'center'}}>
                    {deck.cards !== undefined && Object.keys(deck.cards).length > 1 ? Object.keys(deck.cards).length + ' cards' : Object.keys(deck.cards).length + ' card'}
                </Text>
            </Card>
        )
    }

}

export default DeckView