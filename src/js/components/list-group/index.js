import React, {
	Component
} from 'react';

import './index.scss';

class ListGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: this.props.listData
		}
	}

	render() {
		let {
			listData
		} = this.props;

		let listNode = () => {
			return listData.map((key, val) => {

			});
		}

		console.log(this.state);

		return <div className="list-group">
				<div className="list-group-item	">
					
				</div>	
			</div>
	}
}

export default ListGroup;