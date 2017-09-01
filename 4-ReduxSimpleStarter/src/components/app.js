import React, { Component } from 'react';

/*
  This does not need to be a container because it doesn't really care about the list of books or the currently selected books. The only thing it is here for is to render the book list and book detail to the page; it doesn't care what those show.
*/

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
