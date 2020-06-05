import React from 'react';

import '../styles/VideoItem.scss'

const VideoItem = props => {

  let { video, onVideoSelect } = props;

  let selectVideo = () =>{
    onVideoSelect(video);
  }

  return (
    <div className='video' onClick={selectVideo}>
      <img className='video__img' src={video.snippet.thumbnails.medium.url} alt='thumbnail'/>
      <p className='video__title'>{video.snippet.title}</p>
    </div>
  );
}

export default VideoItem;