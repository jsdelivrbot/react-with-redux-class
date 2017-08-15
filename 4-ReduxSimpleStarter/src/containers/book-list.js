import React, { Component } from 'react';
import { connect } from 'react-redux'; //remember, if we use curly braces, we're just grabbing that specific property from the file, not the whole thing
//in this regard, "connect" is a function, hence the lower-case c
//'react-redux' is the glue library between react and redux

class BookList extends Component {

  renderList() {
    //we want to get this list of books to show up in our container
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

//want to take our application state as an argument and whatever is returned will show up as props inside of BookList
//creating the link between redux and react is done through a function such as mapStateToProps
function mapStateToProps(state) {
  return {
    books: state.books
  };
  //whatever is returned here, will get set to this.props
}
//whenever our application state changes, this returned container will instantly re-render with a new list of books

//the connect function will take a function and a component and return a container
//this is what we want to export, so we move the export default down here
export default connect(mapStateToProps)(BookList);
//whenever the application state changes, the object in the state function will be assigned as props to the component 
