import React, {Component} from 'react'
import {View} from 'react-native'
import {FormInput, FormLabel, FormValidationMessage, Text} from "react-native-elements";


export default class NewDeckView extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>
                    WHAT IS THE TITLE OF YOUR NEW DECK ?
                </Text>

                <FormInput placeholder={'Deck Title'}/>
                <FormValidationMessage></FormValidationMessage>

            </View>
        )
    }

}