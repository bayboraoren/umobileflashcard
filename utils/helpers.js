import {Notifications, Permissions} from 'expo'
import {AsyncStorage} from 'react-native'
const NOTIFICATION_KEY = 'UmobileFlashcard:notifications'


export function generateID () {
    return '_' + Math.random().toString(36).substr(2, 9);
};


export function setLocalNotification () {


    Notifications.addListener((notification) => {
        console.log('notification recieved!', notification);
        clearLocalNotification()
            .then(setLocalNotification)
    })

    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate()+1)
                            tomorrow.setHours(13)
                            tomorrow.setMinutes(30)

                            console.log('notification set date and time is ' + tomorrow)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
    return {
        title: 'Start your daily quiz!',
        body: "👋 don't forget to start your quiz for today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}