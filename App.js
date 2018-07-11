import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Avatar, Icon} from "react-native-elements";
import {createBottomTabNavigator} from "react-navigation";
import NewDeckView from "./components/newdeck/NewDeckView";
import DeckListView from "./components/decklist/DeckListView";
import { Constants } from 'expo'
import { purple} from "./utils/colors"


export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <UStatusBar backgroundColor={purple} barStyle="light-content" />
                <Text>HELLO4</Text>
                <Tabs/>
            </View>
        );
    }
}

function UStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createBottomTabNavigator({
    NewDeck: {
        screen: DeckListView,
        navigationOptions: {
            tabBarLabel: 'DECK LIST',
            tabBarIcon: () => <Icon
                name='pencil'
                type='font-awesome'
                color={purple}/>
        },
    },
    DeckList: {
        screen: NewDeckView,
        navigationOptions: {
            tabBarLabel: 'NEW DECK',
            tabBarIcon: () => <Icon
                name='list'
                type='font-awesome'
                color={purple}/>
        },
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
