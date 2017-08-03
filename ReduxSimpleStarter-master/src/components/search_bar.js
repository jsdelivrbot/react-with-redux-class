import React from 'react';
// Still need React because our JSX below uses React.createElement

const SearchBar = () => {
  return <input />
}

//Remember: React components can show other components
// but index.js needs a reference to SearchBar in order to import it.
// So we export it, specifically an amount of code that we only want to show
export default SearchBar;

//If we had above: (instead of line 11)
// const foo = 5;
// export default foo;
//then if index.js imported SearchBar, SearchBar would = 5, not the above component
