import React from 'react';
import VideoItem from './VideoItem.js';

import '../styles/VideoList.scss';

const VideoList = (props) => {
  
  let { videos, onVideoSelect } = props;

  return (
    <div className='video-list'>
      {videos.map((item, i) => {
        return <VideoItem key={i} onVideoSelect={onVideoSelect} video={item}/>;
      })}
    </div>
  );
};

export default VideoList;
