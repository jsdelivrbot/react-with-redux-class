import React, { Component } from 'react';
// -Still need React because our JSX below uses React.createElement
// -{} implies following line:
// const Component = React.Component;

// this is called a functional component, because it uses a function
// const SearchBar = () => {
//   return <input />
// }

// the other type of component is a class component:
// used when we want some type of record keeping and aware of itself and what's happened since it was rendered
class SearchBar extends Component {
  //syntax of class method
  render() {
    // necessary method needed for all class components
    // this method must also return some JSX
    // return <input onChange={this.onInputChange} />;
    // when writing JSX and using JS variables (like this.onInputChange) we need to wrap the variables in {}

    //above using arrow notation:
    //-don't need initial curly braces after the arrow if the arrow notation code is all on one line
    //-if have a single argument (like event), we don't need the parentheses around the parameter
    return <input onChange={event => console.log(event.target.value)} />;
  }

  //event handler
  //naming convention: "on{name of Element}{event to handle}"
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

}

// When to use functional vs class component? It's challenging/dependant. Try starting with functional and, if needed, refactor into a class.

//Remember: React components can show other components
// but index.js needs a reference to SearchBar in order to import it.
// So we export it, specifically an amount of code that we only want to show
export default SearchBar;

//If we had above: (instead of line 11)
// const foo = 5;
// export default foo;
//then if index.js imported SearchBar, SearchBar would = 5, not the above component
