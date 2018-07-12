import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, FormInput, FormLabel, FormValidationMessage, Text} from "react-native-elements";
import {black, purple} from "../../utils/colors";


export default class NewDeckView extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>
                    WHAT IS THE TITLE OF YOUR NEW DECK ?
                </Text>

                <FormInput placeholder={'Deck Title'}/>

                <Button backgroundColor={purple}
                        onPress={() => alert('hello')}
                    title='Submit' />

            </View>
        )
    }

}