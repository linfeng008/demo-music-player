'use strict';
// 主面板
import React, {
	Component
} from 'react';
import './index.scss';

class Player extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="main">
          <div className="round">
              <div className="beginSpot"/>
              <div className="endSpot"/>
              <div className="bgImg" style={{backgroundImage: "url('https://img3.doubanio.com/lpic/s2975130.jpg')"}}/>
          </div>
      </div>;
    }
}

export default Player;
