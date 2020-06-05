import React from 'react';

const VideoDetail = (props) => {

  let { video } = props;

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div className='video-detail'>
      <div className='video-detail__video'>
        <iframe src={videoSrc}/>
      </div>
      <div className='video-detail__description'>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
