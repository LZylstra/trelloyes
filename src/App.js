// The App component should render markup matching the design.html: the main element, a header with the h1 and a div with class 'App-list'.
// The App component will accept 1 prop, store.
// The store prop is an object with 2 keys: lists and allCards.
// lists is an array of objects.
// allCards is an object where each key is a card's ID and the value is the card object with a title and content.
// You'll be given a dummy STORE object to pass to your App.
// The App should render a List component for each of the items in the store.lists array.
// Each instance of the List component should be passed 2 props (and a key). The 2 props are header and cards.
// The header prop is a string for the List's header.
// The cards prop will be an array of card objects.
// You'll need to combine the cardIds array for the list with the allCards object.

import React from 'react';
import List from './List'
import './App.css';
import store from './STORE'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends React.Component {
  state = {
    listOfCards: store
  };

  handleDelete = (cardId) =>{
    const { lists, allCards } = this.state.listOfCards;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      listOfCards: {
        lists: newLists,
        allCards: newCards
      }
    })
  }

  handleRandom = (listId) =>{
  const newCard = newRandomCard();
     
    const newLists = this.state.listOfCards.lists.map(list  =>{
      console.log(list);
      if (list.id === listId){
        return {
        ...list,
        cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      listOfCards: {
        lists: newLists,
        allCards: {
          ...this.state.listOfCards.allCards,
          [newCard.id]: newCard
        }
      }
    })

  }

  render (){
    const taskComponents = this.state.listOfCards.lists.map(list =>{
      return (
      <List 
        key = {list.id}
        handleDelete={this.handleDelete}
        handleRandom={this.handleRandom}
        header = {list.header}
        card = {list.cardIds.map(id => this.state.listOfCards.allCards[id])}
        id = {list.id}
       />
      ); //end return
    }); //end map taskComponents

  return(
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>

      <div className="App-list">{taskComponents}</div>
    </main>
      ); //end return


    } //end render
}//end APP


export default App;