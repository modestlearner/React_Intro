import React, { Component } from 'react'

class Counter extends Component {
  render () {
    return (
      <div>
        <span className = {this.getBadgeClasses()}>{this.formatcount()}</span>
        <button onClick ={()=>this.props.onInc(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
        <button onClick = {()=>this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2">Delete</button>
      </div>
    )
  }
  getBadgeClasses(){
    let classes = "badge m-2 badge-"
    if(this.props.counter.value===0){
      classes+='warning'
    }
    else{
      classes+='primary'
    }
    return classes
  }
  formatcount(){
      return this.props.counter.value===0? 'Zero': this.props.counter.value;
  }

}

export default Counter
