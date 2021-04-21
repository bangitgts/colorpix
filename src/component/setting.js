import React, { Component } from 'react';
class Setting extends Component{

    tang(a){
      return a++;
    }
    inCrease(number){
      number = this.props.setfontSize;
      number++;
      this.props.onReFontSize(number);
    }
    dowCrease(number){
      number = this.props.setfontSize;
      number--;
      this.props.onReFontSize(number);
    }
    render(){
      return(
        <div className="nav justify-content-center">
        <div className="nav-item">
          <button onClick={()=> this.inCrease()}
           className="btn btn-success">+</button>
          <button onClick={()=> this.dowCrease()} className="btn btn-success">-</button>
        </div>
      </div>
      
      );
    }
}
export default Setting
