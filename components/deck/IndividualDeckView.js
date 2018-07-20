import React, {Component} from 'react'
import {View, Animated, Text} from 'react-native'
import {connect} from "react-redux";
import {black, purple, white} from "../../utils/colors";
import {Button} from "react-native-elements";
import DeckViewWithoutButton from "../decklist/DeckViewWithoutButton";
import {clearLocalNotification, setLocalNotification} from "../../utils/helpers";

class IndividualDeckView extends Component {

    state = {
        fadeAnim: new Animated.Value(0),
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'DECK VIEW',
        }
    }


    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 2500,
            }
        ).start()
    }


    handleStartQuiz = () => {

        clearLocalNotification()
            .then(setLocalNotification)

        this.props.navigation.navigate(
            'QuizView',
        )

    }

    render() {

        const {deck} = this.props
        let {fadeAnim} = this.state;


        return (
            <Animated.View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between', ...this.props.style,
                opacity: fadeAnim
            }}>
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
                        onPress={this.handleStartQuiz}
                        style={{flex: 1}}
                    />
                </View>
            </Animated.View>
        )
    }

}

function mapStateToProps({selectedDeck}, {navigation}) {

    return {
        deck: selectedDeck,
    }
}

export default connect(mapStateToProps)(IndividualDeckView)