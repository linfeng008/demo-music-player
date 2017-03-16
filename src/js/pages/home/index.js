'use strict';

import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import TitleBar from '../../components/title-bar/index.js';
import Player from '../../components/player/index.js';
import Control from '../../components/control/index.js';

import './index.scss';

class Home extends Component {
	  render() {
				   return <div className="wrap">
						<TitleBar/>
						<Player/>
						<Control/>
					</div>;
  }
}

ReactDOM.render(<Home/>, document.getElementById('app'));
