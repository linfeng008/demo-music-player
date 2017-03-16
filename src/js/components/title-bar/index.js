import React, {
	Component
} from 'react';

import ReactDOM from 'react-dom';
import './index.scss';

class TitleBar extends Component {
		 render() {
			 return <div className="titleBar">
						<div className="left">
							<div className="song-name">
								高山流水
							</div>
							<div className="song-singer">
								王昌元2
							</div>
						</div>
						<div className="right">
							<div className="share-btn">
									<span className="iconfont icon-share"/>
							</div>
						</div>
					</div>;
				 }
}

export default TitleBar;
