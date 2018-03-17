"use strict";
// 播放器控制器

import React, { Component } from "react";
import "./index.scss";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList: [
        "../source/haikuotiankong.mp3",
        "../source/guanghuisuiyue.mp3"
      ],
      musicCurrend: 0,
      musicStatus: 0,
    };
  }
  componentWillMount() {
    var self = this;
    self.audio = document.createElement("audio");
    self.audio.src = this.state.playIng;
    //self.audio.src = 'http://mr1.doubanio.com/e5297b782dae1039274c53738d149334/1/fm/song/p278560_128k.mp4';
    self.audio.autoplay = true;
    self.audio.addEventListener("canplaythrough", function() {
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
      musicCurrend: musicCurrend--,
    });
  }

  playNext() {
    var self = this;
    self.setState({
      musicCurrend: musicCurrend++,
    });
  }

  render() {
    return (
      <div className="controls">
        <div className="control">
          <div className="column prev" onClick={this.playPrev.bind(this)}>
            <span className="iconfont icon-prev" />
          </div>
          <div className="column play" onClick={this.play.bind(this)}>
            <span className="iconfont icon-play" />
          </div>
          <div className="column next" onClick={this.playNext.bind(this)}>
            <span className="iconfont icon-next" />
          </div>
        </div>
      </div>
    );
  }

}

export default Control;
