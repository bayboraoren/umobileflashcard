import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from "react-redux";
import {black, purple, white} from "../../utils/colors";
import {Button} from "react-native-elements";
import DeckViewWithoutButton from "../decklist/DeckViewWithoutButton";

class IndividualDeckView extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Deck View'
        }
    }


    render() {

        const {deck} = this.props

        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <DeckViewWithoutButton key={deck.id} deck={deck} navigation={this.props.navigation} style={{flex: 1}}/>
                <View style={{flex: 1}}>
                    <Button
                        backgroundColor={white}
                        color={black}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='ADD CARD'
                        onPress={() => this.props.navigation.navigate(
                            'AddCardView',
                            {
                                deckId: deck.id,
                                deckName: deck.name
                            }
                        )}
                        style={{flex: 1}}
                    />
                    <Button
                        backgroundColor={purple}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='START QUIZ'
                        onPress={() => this.props.navigation.navigate(
                            'IndividualDeckView',
                            {deck: deck}
                        )}
                        style={{flex: 1}}
                    />
                </View>
            </View>
        )
    }

}

function mapStateToProps({selectedDeck}, {navigation}) {

    return {
        deck:selectedDeck,
    }
}

export default connect(mapStateToProps)(IndividualDeckView)