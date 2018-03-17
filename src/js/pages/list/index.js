import React, { Component } from "react";
import ReactDOM from "react-dom";
import ListGroup from "../../components/list-group/index.js";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as playAction from '../../actions/play';

import injectRem from "../../../utils/px2rem.js";
let rem = injectRem();
window.dp2rem = rem.dp2rem;
window.rem2dp = rem.rem2dp;
import "./index.scss";

const listData =  [
    {
      songName: "真的爱你",
      singer: "郝云",
      sourceUrl: "/src/source/08.真的爱你-Beyond.mp3",
      cover: "https://gw.alicdn.com/tps/TB1BvOaOFXXXXX4XFXXXXXXXXXX-122-122.png",
      id: 1
    },
    {
      songName: "光辉岁月",
      singer: "beyond",
      sourceUrl: "/src/source/09.光辉岁月(粤语版)-Beyond.mp3",
      cover: "https://gw.alicdn.com/tps/TB1WSV3OFXXXXbJXFXXXXXXXXXX-122-122.png",
      id: 1
    },
    {
      songName: "海阔天空",
      singer: "beyond",
      sourceUrl: "/src/source/10.海阔天空-Beyond.mp3",
      cover: "https://gw.alicdn.com/tps/TB1iRWtOFXXXXbHXXXXXXXXXXXX-122-122.png",
      id: 1
    }
  ];

class List extends Component {
  render() {
    return (
      <div>        
        <ListGroup listData={listData} />
      </div>
    );
  }
}



function mapStateToProps(state){
	return {
		playEd: state.playEd
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(playAction, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(List);