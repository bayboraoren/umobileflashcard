import {AsyncStorage} from 'react-native'

const DECK_STORAGE_KEY = 'uMobileFlashcard:deck'


/**

 ALTERNATIVE STRUCTURE
 .....

 let decks = []

 decks['id'] = {
  name: 'deck name',
  cards: [{
      id: 'id1',
      question: 'card question',
      answer: 'card answer'
  },
          {
      id: 'id2',
      question: 'card question',
      answer: 'card answer'
  }
]
 }

 console.log(decks['id'].cards[0].question)
 console.log(decks['id'].cards.find((element)=>{return element.id==='id2'}))


 STRUCTURE
 .....

 let decks = []

 decks =[
 {id:'deck 1',
   name: 'deck name',
     cards: [{
       id: 'card 1',
       question: 'card question',
       answer: 'card answer'
   }]
 },
 {id:'deck 2',
   name: 'deck 2 name',
     cards: [{
       id: 'card 1',
       question: 'card question',
       answer: 'card answer'
   }]
 }
 ]


 **/


export function getCardListByDeckId(decks, deckId) {

}

export function getCardByCardId(decks, cardId) {

}

export function saveCard(deckId, card) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((decks) => {
            decks = JSON.parse(decks)
            decks[deckId].cards[card.id] = card;
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
            return decks
        })
}

///////// DECK


export function clearDeck(){
    return AsyncStorage.clear()
}


export function saveDeck(deck) {
    deck.cards = {}
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [deck.id]: deck
    }))
}


export function getDeck(deckId) {

}

export function getAllDeck() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(objectsToMap)
}


export function objectsToMap(results) {
    return JSON.parse(results)
}


/*export function fetchCalendarResults() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(formatCalendarResults)
}

export function submitEntry({entry, key}) {
    return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
        [key]: entry
    }))
}

export function removeEntry(key) {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
        })
}*/