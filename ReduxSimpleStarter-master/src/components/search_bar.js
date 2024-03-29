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
  // What is state?
  // State is a plain JS object used to record and react to user events. 
  // Each class based component that we define has its own state object.
  // Whenever a component's state is changed, the component re-renders (using its render() method), forcing its children to re-render also (using their render() method).
  // Only class-based components have a state.

  //This is how we initialize state in a class-based component; must be done in the constructor
  constructor(props) {
    super(props); // calls the parent constructor; can do because we extended to the parent above

    //initialize state with a new object
    // -could contain properties passed in through props
    // we can only change state like this in our constructor;
    //    -everywhere else must use this.setState
    this.state = { term: '' }; //this is not a greyed out placeholder, this is the actual starting value
  }


  //syntax of class method
  render() {
    // necessary method needed for all class components
    // this method must also return some JSX
    // non-arrow notation:

    // return <input onChange={this.onInputChange} />;

    // when writing JSX and using JS variables (like this.onInputChange above) we need to wrap the variables in {}

    //above using arrow notation: (note: don't need separate defined event handler)
    //-don't need initial curly braces after the arrow if the arrow notation code is all on one line
    //-if have a single argument (like event), we don't need the parentheses around the parameter
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );  // we can use this.state.term to reference state though

    //having value={this.state} make it a controlled component. Therefore, its value only changes when state changes
    // this.setState causes the input component to re-render. Because it is updating term, its value is set to the new value of term
    //when onChange is triggered, the value of the input hasn't actually changed yet. When the user typed in the input, they didn't change the value, they only triggered the event.

  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
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

