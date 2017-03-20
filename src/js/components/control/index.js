'use strict';
// 播放器控制器

import React, {
  Component
} from 'react';
import './index.scss';

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList: [
        '../source/haikuotiankong.mp3',
        '../source/guanghuisuiyue.mp3'
      ],
      defaultActive: 0,
      playIng: '../source/haikuotiankong.mp3'
    }
  }
  componentWillMount() {
    var self = this;
    self.audio = document.createElement('audio');
    self.audio.src = this.state.playIng;
    //self.audio.src = 'http://mr1.doubanio.com/e5297b782dae1039274c53738d149334/1/fm/song/p278560_128k.mp4';
    self.audio.autoplay = true;
    self.audio.addEventListener('canplaythrough', function() {
      self.audio.play();
    });
  }
  componentWillUpdate(nextProps, nextState) {
    var self = this;
    self.audio.src = nextState.playIng;
  }

  play() {
    var self = this;
    if (self.audio.paused) {
      self.audio.play();
    } else {
      self.audio.pause();
    }
  }

  playPrev() {
    var self = this;
    self.setState({
      playIng: this.state.musicList[1]
    })
  }

  playNext() {
    var self = this;
    self.setState({
      playIng: this.state.musicList[0]
    })
  }

  render() {
    return <div className="controls">
          <div className="top">
            <div className="column like">
              <span className="iconfont icon-like"></span>
            </div>
            <div className="column del">
              <span className="iconfont icon-del"></span>
            </div>
            <div className="column more">
              <span className="iconfont icon-list"></span>
            </div>
          </div>
          <div className="bottom">
              <div className="playBtn">
                <div className="prev" onClick={this.playPrev.bind(this)}>
                  <span className="iconfont icon-prev"></span>
                </div>
                <div className="play" onClick={this.play.bind(this)}>
                  <span className="iconfont icon-play"></span>
                </div>
                <div className="next" onClick={this.playNext.bind(this)}>
                  <span className="iconfont icon-next"></span>
                </div>
              </div>
          </div>
        </div>
  }
};

export default Control;