import React, {Component} from 'react';

import Socket from 'socket.io-client';

import Coin from './Coin';

import './Tower.css';

const SERVER = Socket('http://localhost:3000')

export default class Tower extends Component {
  constructor(props){
    super(props);

    this.state = {
      coins: [],
      amount: 0
    }
    this.handleKey = this.handleKey.bind(this);
  }

  componentWillMount(){
    SERVER.on('connected', (amount) => {

      console.log('Connected to server');

    });

    SERVER.on('coin', (value) => {

      this.insertCoin(value)

    });
  }


  insertCoin(value){
    this.state.coins.push(value);

    let amount = this.state.amount+value;
    this.setState({
      amount : amount
    });

    this.forceUpdate();
  }

  handleKey(event){
    let value = null;

    switch(event.keyCode){
      case 49: //1
        value = 1;
      break;
      case 50: //2
        value = 2;
      break;
      case 53: //5
        value = 5;
      break;
    }

    //local
    this.insertCoin(value);
    //remote
    SERVER.emit('coin', value);
  }

  componentDidMount(){
    addEventListener('keydown', this.handleKey)
  }

  fill(event){

    /*
    for(let i = 0;i<this.props.amount;i++){
      let value = Math.floor(Math.random() * 10);
      this.state.coins.push(value)
      this.state.amount = this.state.amount+value;
    }35
    */
  }

  render(){
    return(
      <div className="Tower">

      {this.state.coins.map((value) =>
         <Coin value={value} color="yellow"/>
       )}

       <Coin value={this.state.amount} color="red" />
      </div>
    );
  }
}
