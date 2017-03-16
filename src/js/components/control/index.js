'use strict';
// 播放器控制器

import React, {Component} from 'react';
import './index.scss';

class Control extends Component {
    constructor(props) {
        super(props);        
    }
    componentWillMount() {
      var self = this;
      self.audio = document.createElement('audio');
      self.audio.src = '../source/haikuotiankong.mp3';
      //self.audio.src = 'http://mr1.doubanio.com/e5297b782dae1039274c53738d149334/1/fm/song/p278560_128k.mp4';
      self.audio.autoplay = true;
      self.audio.addEventListener('canplaythrough', function() {
        self.audio.play();
      });
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
                <div className="prev">
                  <span className="iconfont icon-prev"></span>
                </div>
                <div className="play">
                  <span className="iconfont icon-play"></span>
                </div>
                <div className="next">
                  <span className="iconfont icon-next"></span>
                </div>
              </div>
          </div>
        </div>
    }
};

export default Control;
