import React, { Component } from 'react'; //Core library
import ReactDOM from 'react-dom'; //ReactDOM is used when we're trying to put react stuff right into the dom

// Downwards Data Flow:
// -only the most parent component should be responsible for fetching data
// since index.js is our parent, it will handle the retrieval of youtube data from the api
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';  //need to do this because we created this file
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAYnxQ-Vv9CNkbW70QdSEBQsFC3BuqESfY';


// // Create a new component. This component should produce some html
// // const means: no reassignment (App won't change) {as I'd expect const to mean}
// // => is ES6 syntax used as a function definer and is equivalent to:
// // const App = function() {...}
// const App = () => {
//   // HTML stuff here is actually JSX (subset of JS)
//   //  allows us to write html as javascript
//   //  webpack and babel will transpiling of code before it's run in browser
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

//refactor the above functional component into class component so we can use state
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    //Note: this method isn't instantaneous...it takes a little bit of time
    // YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
    //   this.setState({ videos });  //this is equivalent to: this.setState({ videos: videos });
    //   //({ videos }) only works when the key and property name have the same name
    // });

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  //need to pass data from parent component App into child VideoList, which is referred to as passing props
  //component still tries to render itself even when YTSearch is still performing, so we need to be able to handle null states
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}
//passing onVideoSelect means we're passing a function that updates another property
//onVideoSelect is treated as a callback function, that both video_list and video_list_item will use
//It's rare to pass a callback function more than 2 levels deep, though. You usually only want small communication b/w parent and child (and maybe grandchild). If you need more steps, you may want to think of a different approach. This works for our purposes though.

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
