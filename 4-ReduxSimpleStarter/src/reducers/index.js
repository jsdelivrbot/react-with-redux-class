import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//this tells Redux how to create our application state
//we have one piece so far: books which gets created from our BooksReducer function
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
