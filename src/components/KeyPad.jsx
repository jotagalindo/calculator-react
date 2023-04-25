import React, { Component } from 'react';
import './KeyPad.css';

class KeyPad extends Component { 
  render() {
    return (
      <div className="buttons">
        <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
        <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
        <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
        <button className='orange' name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


        <button className='grey' name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button className='grey' name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button className='grey'name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button className='orange' name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


        <button className='grey' name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button className='grey' name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button className='grey' name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button className='orange' name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

        <button className='grey' name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button className='grey' name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button className='grey' name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button className='orange' name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


        <button className='grey' name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
        <button className='grey' name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button className='grey' name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
        <button className='orange' name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
      </div>
    )
  }
}

export default KeyPad;