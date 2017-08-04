//doesn't have a need for state, so we can do it as a functional component
import React from 'react';

//when we refactor from a functional component to a class component, we need to update our props reference as it become a member of the class on the refactor.
//so, props becomes this.props
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};
//need to use className for ul to avoid conflicts

export default VideoList;
