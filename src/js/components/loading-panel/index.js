import {Component} from 'react';

import './index.scss';

class LoadingPanel extends Component{

  render(){
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  }
}

export default LoadingPanel;