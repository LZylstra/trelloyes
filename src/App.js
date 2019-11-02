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

function App() {
  return (
    <main className='App'>
      {/* content goes here */}
    </main>
  );
}

export default App;