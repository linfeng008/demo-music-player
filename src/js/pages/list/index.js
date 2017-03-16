import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import ListGroup from '../../components/list-group/index.js';


import './index.scss';

const listData = {
	data: [{
		songName: '真的爱你',
		singer: '郝云',
		sourceUrl: '/src/source/08.真的爱你-Beyond.mp3',
		cover: 'https://gw.alicdn.com/tps/TB1BvOaOFXXXXX4XFXXXXXXXXXX-122-122.png',
		id: 1
	}, {
		songName: '光辉岁月',
		singer: 'beyond',
		sourceUrl: '/src/source/09.光辉岁月(粤语版)-Beyond.mp3',
		cover: 'https://gw.alicdn.com/tps/TB1WSV3OFXXXXbJXFXXXXXXXXXX-122-122.png',
		id: 1
	}, {
		songName: '海阔天空',
		singer: 'beyond',
		sourceUrl: '/src/source/10.海阔天空-Beyond.mp3',
		cover: 'https://gw.alicdn.com/tps/TB1iRWtOFXXXXbHXXXXXXXXXXXX-122-122.png',
		id: 1
	}]
};

class List extends Component {
	render() {
		return <div>
				<h1>hello music</h1>
				<ListGroup listData={listData} />
			</div>
	}
};

ReactDOM.render(<List/>, document.getElementById('app'))
