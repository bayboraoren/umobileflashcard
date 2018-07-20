import React from 'react';
import {OS, StatusBar, StyleSheet, View} from 'react-native';
import {Icon} from "react-native-elements";
import {createBottomTabNavigator, createStackNavigator, StackNavigator} from "react-navigation";
import NewDeckView from "./components/newdeck/NewDeckView";
import DeckListView from "./components/decklist/DeckListView";
import {Constants} from 'expo'
import {black, purple, white} from "./utils/colors"
import './ReactotronConfig'
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from './app/AppReducers'
import middleware from './middleware'
import IndividualDeckView from "./components/deck/IndividualDeckView";
import AddCardView from "./components/card/AddCardView";
import QuizView from "./components/quiz/QuizView";
import {clearLocalNotification, setLocalNotification} from "./utils/helpers";


export default class App extends React.Component {

    componentDidMount() {
        clearLocalNotification()
            .then(setLocalNotification)
    }

    render() {
        return (
            <Provider store={createStore(reducers, middleware)}>
                <View style={{flex: 1}}>
                    <UStatusBar backgroundColor={purple} barStyle="light-content"/>
                    <MainNavigator/>
                </View>
            </Provider>
        );
    }
}

function UStatusBar({backgroundColor, ...props}) {

    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createBottomTabNavigator({
        DeckList: {
            screen: DeckListView,
            navigationOptions: {
                title: 'Header title',
                headerTintColor: white,
                tabBarLabel: 'DECK LIST',
                tabBarIcon: () => <Icon
                    name='pencil'
                    type='font-awesome'
                    color={white}/>
            },
        },

        NewDeck: {
            screen: NewDeckView,
            navigationOptions: {
                title: 'Header title',
                headerTintColor: white,
                tabBarLabel: 'NEW DECK',
                tabBarIcon: () => <Icon
                    name='list'
                    type='font-awesome'
                    color={white}/>
            },
        },
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: OS === 'ios' ? purple : white,
            style: {
                height: 56,
                color: black,
                backgroundColor: OS === 'ios' ? white : purple,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    });

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            title: 'HOME',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
                height: 25
            }
        }
    },
    IndividualDeckView: {
        screen: IndividualDeckView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
                height: 25
            }
        }
    },
    AddCardView: {
        screen: AddCardView,
    },
    QuizView: {
        screen: QuizView,
    }
}, {
    initialRouteName: 'Home',
});
