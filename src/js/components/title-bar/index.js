import React, { Component } from "react";

import {NavLink} from 'react-router-dom';

import ReactDOM from "react-dom";
import "./index.scss";

class TitleBar extends Component {
  share() {
    this.props.sharePanelShow;
  }
  render() {
    return (
      <div className="title-bar">
        <div className="left">
          <NavLink to='/list'>
            <span className="iconfont icon-list" />
          </NavLink>
          <div className="song-info">
            <div className="song-name">
              高山流水
            </div>
            <div className="song-singer">
              王昌元2
            </div>
          </div>
        </div>
        <div className="right">
          <div className="share-btn" onClick={this.share.bind(this)}>
            <span className="iconfont icon-share" />
          </div>
        </div>
      </div>
    );
  }
}

export default TitleBar;
