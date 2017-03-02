import React, {Component} from 'react';

import './Coin.css';

const DEFAULT = {
  value: 1
}

export default class Coin extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: (this.props.value!= undefined ? this.props.value : DEFAULT.value)
    }
  }

  componentWillReceiveProps(props) {
    this.setState({value: this.props.value});
  }

  render(){
    return(
      <div className="Coin" style={{backgroundColor: this.props.color}}>
        {this.state.value}
      </div>
    );
  }
}
