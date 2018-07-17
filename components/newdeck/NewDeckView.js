import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, FormInput, Text} from "react-native-elements";
import {purple} from "../../utils/colors";
import {generateID} from "../../utils/helpers";
import {connect} from "react-redux";
import {handleAddNewDeck} from "./addNewDeckAction";


class NewDeckView extends Component {

    state = {
        deckTitle: '',
        generatedDeckId: '',
    }

    handleSaveDeck = () => {

        let deck = {}
        deck.id = generateID()
        deck.name = this.state.deckTitle

        this.setState(() => ({
            generatedDeckId: deck.id
        }))

        this.props.handleAddNewDeck(deck)

        this.props.navigation.navigate(
            'DeckList'
        )

    }

    handleOnChangeFormInput = (deckTitle) => {

        this.setState(() => ({
            deckTitle
        }))

    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Text>
                    WHAT IS THE TITLE OF YOUR NEW DECK ?
                </Text>

                <FormInput placeholder={'Deck Title'} onChangeText={this.handleOnChangeFormInput}/>

                <Button backgroundColor={purple}
                        onPress={this.handleSaveDeck}
                        title='SAVE DECK'/>

            </View>
        )
    }

}

function mapStateToProps() {
    return {
    }
}

export default connect(mapStateToProps,{handleAddNewDeck})(NewDeckView)