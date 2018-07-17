import React, {Component} from 'react'
import {View} from "react-native";
import {Button, FormInput} from "react-native-elements";
import {purple} from "../../utils/colors";
import {connect} from "react-redux";
import {handleAddCard} from "./cardAction";
import {generateID} from "../../utils/helpers";
import {handleSetSelectedDeck} from "../deck/deckAction";


class AddCardView extends Component {

    state = {
        question: '',
        answer: '',
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Add New Card'
        }
    }


    handleOnChangeQuestionFormInput = (question) => {
        this.setState(() => ({
            question
        }))
    }

    handleOnChangeAnswerFormInput = (answer) => {
        this.setState(() => ({
            answer
        }))
    }

    handleSaveCard = () => {
        let card = {
            id: generateID(),
            question: this.state.question,
            answer: this.state.answer
        }

        this.props.handleAddCard(this.props.deckId, card)
            .then((deck) => {
                this.props.handleSetSelectedDeck(deck)
                this.props.navigation.navigate(
                    'IndividualDeckView',
                )
            })
    }


    render() {
        return (
            <View>
                <FormInput placeholder={'Write Your Question'}
                           onChangeText={this.handleOnChangeQuestionFormInput}/>

                <FormInput placeholder={'Write Your Answer'}
                           onChangeText={this.handleOnChangeAnswerFormInput}
                           multiline={true}
                           numberOfLines={4}/>

                <Button backgroundColor={purple}
                        onPress={this.handleSaveCard}
                        title='SAVE CARD'/>


            </View>
        )
    }

}

function mapStateToProps(state, {navigation}) {

    const {deckId, deckName} = navigation.state.params

    return {
        deckId,
        deckName,
    }
}

export default connect(mapStateToProps, {handleAddCard, handleSetSelectedDeck})(AddCardView)