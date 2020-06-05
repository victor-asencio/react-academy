import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';
import youtube from '../api/youtube.js';

import '../styles/App.scss';
import '../styles/VideoDetail.scss';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
  }
  onTermSubmit = async term => {
    let response = await youtube.get('/search',{
      params: {
        q: term,
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: null,
    })
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    })
  }

  render() {

    let { selectedVideo, videos } = this.state;

    let layoutClasses = classNames('layout', {'layout--video': this.state.selectedVideo});

    return (
      <Fragment>
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <main className={layoutClasses}>
          { selectedVideo && <VideoDetail video={this.state.selectedVideo}/> }
          <VideoList onVideoSelect={this.onVideoSelect} videos={videos}/>
        </main>
      </Fragment>
    );
  }
}

export default App;
