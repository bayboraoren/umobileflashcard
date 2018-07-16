import React, {Component} from 'react'
import {View} from "react-native";
import {Button, FormInput} from "react-native-elements";
import {purple} from "../../utils/colors";


class AddCardView extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Add New Card'
        }
    }

    handleSaveCard = () => {

    }


    render() {
        return (
            <View>
                <FormInput placeholder={'Write Your Question'} onChangeText={this.handleOnChangeFormInput}/>

                <FormInput placeholder={'Write Your Answer'} onChangeText={this.handleOnChangeFormInput}
                           multiline={true}
                           numberOfLines={4}/>

                <Button backgroundColor={purple}
                        onPress={this.handleSaveCard}
                        title='SAVE CARD'/>


            </View>
        )
    }

}

export default AddCardView