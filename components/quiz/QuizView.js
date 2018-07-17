import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView} from "react-native"
import {connect} from "react-redux"
import FlipCard from 'react-native-flip-card'
import {Button, Text} from "react-native-elements";
import {black, purple, white} from "../../utils/colors";

class QuizView extends Component {

    state = {
        flip: false
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Quiz View'
        }
    }


    render() {

        const {deck} = this.props

        return (
            <View style={styles.container}>
                <View>
                    <FlipCard
                        flip={this.state.flip}
                        friction={6}
                        perspective={1000}
                        flipHorizontal={true}
                        flipVertical={false}
                        clickable={true}
                        style={styles.card}
                        alignHeight={true}
                        // alignWidth={true}
                        onFlipEnd={(isFlipEnd) => {
                            console.log('isFlipEnd', isFlipEnd)
                        }}
                    >
                        {/* Face Side */}
                        <View style={styles.face}>
                            <Text>The Face</Text>
                        </View>
                        {/* Back Side */}
                        <View style={styles.back}>
                            <Text>T</Text>
                            <Text>h</Text>
                            <Text>e</Text>
                            <Text></Text>
                            <Text>B</Text>
                            <Text>a</Text>
                            <Text>c</Text>
                            <Text>k</Text>
                        </View>
                    </FlipCard>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.setState({flip: !this.state.flip})
                        }}
                    >
                        <Text style={styles.buttonText}>Flip</Text>
                    </TouchableOpacity>
                </View>

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
                        'QuizView',
                    )}
                    style={{flex: 1}}
                />


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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 20,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    card: {
        width: 200,
    },
    face: {
        flex: 1,
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        flex: 1,
        backgroundColor: '#f1c40f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 30,
        marginTop: 30,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: '#007AFF',
        borderColor: 'transparent',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    img: {
        flex: 1,
        height: 64
    }
});