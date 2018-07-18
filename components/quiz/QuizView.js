import React, {Component} from 'react'
import {Image, View} from "react-native"
import {connect} from "react-redux"
import {green, realRed} from "../../utils/colors"
import {Button, Text} from "react-native-elements"
import Correct from "../../images/correct.png"
import PercentageCircle from 'react-native-percentage-circle'

class QuizView extends Component {

    state = {
        questionIndex: 0,
        answered: false,
        correctAnsweredCounter: 0,
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Quiz View'
        }
    }


    handleAnswered = () => {
        this.setState((prevState) => ({
                answered: !prevState.answered
            }
        ))
    }

    handleNextQuestion = (isCorrect) => {
        this.setState((prevState) => ({
                questionIndex: prevState.questionIndex + 1,
                answered: false,
                correctAnsweredCounter: isCorrect === true ? prevState.correctAnsweredCounter + 1 : prevState.correctAnsweredCounter
            }
        ))
    }

    render() {

        const {deck} = this.props

        return (
            <View style={{flex: 1}}>
                {this.state.questionIndex !== Object.keys(deck.cards).length &&
                <View>

                    <View>
                        <Text style={{alignSelf: 'flex-start'}}>
                            {this.state.questionIndex + 1} / {Object.keys(deck.cards).length}
                        </Text>

                        {this.state.answered === false &&
                        <View>

                            <Text style={{textAlign: 'center'}} h1>
                                {deck.cards[Object.keys(deck.cards)[this.state.questionIndex]].question}
                            </Text>

                            <Text onPress={this.handleAnswered} style={{textAlign: 'center', color:realRed}}>
                                ANSWER
                            </Text>
                        </View>
                        }

                        {this.state.answered === true &&
                        <View>
                            <Text style={{textAlign: 'center'}} h1>
                                {deck.cards[Object.keys(deck.cards)[this.state.questionIndex]].answer}
                            </Text>
                            <Text onPress={this.handleAnswered} style={{textAlign: 'center', color:realRed}}>
                                QUESTION
                            </Text>
                        </View>
                        }
                    </View>

                    <View style={{marginTop:50}}>
                        <Button
                            backgroundColor={green}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='CORRECT'
                            onPress={() => this.handleNextQuestion(true)}
                        />
                        <Button
                            backgroundColor={realRed}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='INCORRECT'
                            onPress={() => this.handleNextQuestion(false)}
                        />
                    </View>
                </View>
                }

                {this.state.questionIndex === Object.keys(deck.cards).length &&
                <View style={{alignItems: 'center'}}>
                    <Text h1>{deck.name}</Text>
                    <PercentageCircle radius={80}
                                      percent={(100 * this.state.correctAnsweredCounter) / Object.keys(deck.cards).length}
                                      color={"#009900"}>

                        <Image style={{width: 80, height: 80}} source={Correct}/>
                        <Text>CORRECT ANSWERS</Text>
                        <Text>{this.state.correctAnsweredCounter}</Text>

                    </PercentageCircle>
                </View>
                }

            </View>
        )
    }

}

function mapStateToProps({selectedDeck}, {navigation}) {

    return {
        deck: selectedDeck,
    }
}


export default connect(mapStateToProps)(QuizView)