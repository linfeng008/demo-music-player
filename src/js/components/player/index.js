"use strict";
// 主面板
import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as playerActions from '../../actions/play';


import "./index.scss";

let defaultRoundStyle = {
  'backgroundImage': 'linear-gradient(90deg, #e9f4eb 50%, transparent 50%, transparent),linear-gradient(90deg, #2bbc64 50%, #e9f4eb 50%, #e9f4eb)'
}

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roundBg: defaultRoundStyle
    };

    ["renderCss"].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });

    this.renderCss();
  }
  renderCss() {
    let _this = this;

    let firstDeg = 90;
    let secondDeg = 90;
    let changeColor = '#e9f4eb'; // 浅色
    let timer = null;
    let step = 1;

    function runFirst() {
      /* 先转 firset 90 ~ 270 */
      if (firstDeg >= 270) {
        // 第一个半圆停止 && 第二个半圆开始
        step = 2;
      } else {
        firstDeg++;
        // 第一个半圆开始
        _this.setState({
          roundBg: { 'backgroundImage': `linear-gradient(${secondDeg}deg, ${changeColor} 50%, transparent 50%, transparent),linear-gradient(${firstDeg}deg, #2bbc64 50%, #e9f4eb 50%, #e9f4eb)` }
        });
      }
    }

    function runSecend() {
      /* 后转 secend = -90   first 270 ~ 450 */
      changeColor = '#2bbc64'; // 深色
      secondDeg = -90;
      if (firstDeg < 450) {
        firstDeg++;
        // 第二个半圆停止
        _this.setState({
          roundBg: { 'backgroundImage': `linear-gradient(${secondDeg}deg, ${changeColor} 50%, transparent 50%, transparent),linear-gradient(${firstDeg}deg, #2bbc64 50%, #e9f4eb 50%, #e9f4eb)` }
        });
      } else {
        clearInterval(timer);
      }
    }

    timer = setInterval(function () {
      if (step == 1) {
        runFirst();
      } else if (step == 2) {
        runSecend();
      }
    }, 10);

  }
  render() {
    return (
      <div className="main">
        <div className="round" style={this.state.roundBg}>
          <div className="beginSpot" />
          <div className="endSpot" />
          <div
            className="bgImg"
            style={{ backgroundImage: "url('https://img3.doubanio.com/lpic/s2975130.jpg')" }}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log(state);
  return {
    Play:state
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(playerActions, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Player);
