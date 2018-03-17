import React, { Component, PropTypes} from "react";

import "./index.scss";

class ListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: this.props.listData,
      playEd: this.props.listData
    }
  }
  
  toPlay(item){
    console.log(item);
  }

  render() {
    console.log(this.props);
    
    let { listData } = this.state;
    let listNode = listData.map((item,i) => {
      return <div className="list-group-item" key={i} onClick={this.toPlay.bind(this,item)}>{item.songName}</div>
    });

    return (
      <div className="list-group">
          {listNode}
      </div>
    );
  }
}

ListGroup.propTypes = {
  listData: PropTypes.array,
  playEd: PropTypes.object,
  play: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};

ListGroup.defaultProps = {
  listData: [],
  playEd:{}
};

export default ListGroup;
