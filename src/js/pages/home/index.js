"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";


import TitleBar from "../../components/title-bar/index.js";
import Player from "../../components/player/index.js";
import Control from "../../components/control/index.js";
import SharePanel from "../../components/share-panel/index.js";
import injectRem from "../../../utils/px2rem.js";

let rem = injectRem();

window.dp2rem = rem.dp2rem;
window.rem2dp = rem.rem2dp;

import "./index.scss";


class Home extends Component {
  construct() {
    this.state = {
      sharePanelShow: false
    };
  }

  render() {
    return (
        <div className="wrap">
          <TitleBar />
          <Player />
          <Control />
        </div>
    );
  }
}



export default Home;
