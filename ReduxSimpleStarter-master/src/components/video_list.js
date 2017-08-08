//doesn't have a need for state, so we can do it as a functional component
import React from 'react';
import VideoListItem from './video_list_item';

//when we refactor from a functional component to a class component, we need to update our props reference as it become a member of the class on the refactor.
//so, props becomes this.props
const VideoList = (props) => {

  //try to stay away from for loops. Use mapping method instead:
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  }); // Can use our API response to find and use an appropriate key

  //React is smart. It sees this array we want to render and knows it, but thinks it could be a list instead. It has logic built in to efficiently render a List. React wants us to have a "key" value for each prop so it can easily lookup in our List if needed. Otherwise, it needs to destroy the entire list and build it back up again with any changes

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};
//need to use className for ul to avoid conflicts

export default VideoList;
