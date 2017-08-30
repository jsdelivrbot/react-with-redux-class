import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//this tells Redux how to create our application state
//we have one piece so far: books which gets created from our BooksReducer function
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
});
// remember any key to the object that we provide to combineReducers, ends up as a key on our global state

export default rootReducer;
