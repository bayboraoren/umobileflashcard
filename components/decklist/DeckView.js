import React, {Component} from 'react'
import {Button, Card, Text} from "react-native-elements";
import {purple} from "../../utils/colors";

class DeckView extends Component {

    render() {

        const {deck} = this.props

        const handle = () => {
            alert('hello')
        }

        return (
            <Card title={deck.name.toUpperCase()} onPress={handle}>
                <Text style={{marginBottom: 10, textAlign: 'center'}}>
                    {deck.cards !== undefined ? deck.cards.length : '0'} cards
                </Text>
                <Button
                    backgroundColor={purple}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card>
        )
    }

}

export default DeckView