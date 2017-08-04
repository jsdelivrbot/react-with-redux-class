import React from 'react'; //Core library
import ReactDOM from 'react-dom'; //ReactDOM is used when we're trying to put react stuff right into the dom

import SearchBar from './components/search_bar';  //need to do this because we created this file

const API_KEY = 'AIzaSyAYnxQ-Vv9CNkbW70QdSEBQsFC3BuqESfY';

// Create a new component. This component should produce some html
// const means: no reassignment (App won't change) {as I'd expect const to mean}
// => is ES6 syntax used as a function definer and is equivalent to:
// const App = function() {...}
const App = () => {
  // HTML stuff here is actually JSX (subset of JS)
  //  allows us to write html as javascript
  //  webpack and babel will transpiling of code before it's run in browser
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//what does above look like as vanilla JS?
// var _temporalUndefined = {};
// var App = _temporalUndefined;

// App = function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hi!"
//   );
// };

// Note: <div /> or <App /> is valid JSX. This is considered an instance whereas Line 6 was just a class

// Take this component's generated HTML and put it on the page (in DOM)
// This requires an instance of the class which is why .render(App); doesn't work
ReactDOM.render(<App />, document.querySelector('.container'));
// 2nd parameter is where this gets rendered to
