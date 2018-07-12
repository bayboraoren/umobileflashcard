import {AsyncStorage} from 'react-native'

const DECK_STORAGE_KEY = 'DECK_STORAGE_KEY'

/**

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


 OTHER
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
export function getDeckList() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((decks)=>{
        return decks.map((deck)=> {
            return {id:deck.id, name: deck.name}
        })
    })
}

export function getDeckById(decks, deckId) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((decks)=>{
        return decks.map((deck)=> {
            return {id:deck.id, name: deck.name}
        })
    })
}

export function getCardListByDeckId(decks,deckId){

}

export function getCardByCardId(decks, cardId){

}

export function saveDeck(deck){

}

export function saveCard(card){

}

export function fetchCalendarResults() {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
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
}