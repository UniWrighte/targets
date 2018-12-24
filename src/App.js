import React, { Component } from 'react';
import logo from './logo.svg';
import target from './images/target.png';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      targets: [],
      indexes: new Set() //TODO change to set
    }
  }

  componentDidMount(){

    const targets = this.fill(12, target);
    this.setState({targets});

  }
  fill(num, item){
    return new Array(num).fill({}).map((x,i)=>(item));
  }
  down(i){
    // const indexes = this.state.indexes.slice();
    const indexes = new Set(this.state.indexes);
    // const index = indexes.indexOf(i);
    const index = indexes.has(i);
    indexes.add(i);
    if(index){
      indexes.delete(i);
    }
    this.setState({indexes});
    return;
  }
  render() {
    const {targets, indexes} = this.state;
    console.log({indexes});
    return (
      <div className="App">
        {/* <img src={target} /> */}
        {targets.map((item,i)=>{
          return <div className="target" key={i}>
          <img className={indexes.has(i) === false ? "targetImg up" : "targetImg down"} onClick={()=>this.down(i)} src={item}  alt="target"/>
          </div>;
        })}
      </div>
    );
  }
}

export default App;
