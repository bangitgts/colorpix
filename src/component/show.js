import React, { Component } from 'react';
class Show extends Component{
    render(){
      return(
        <div>
          <a class="btn btn-primary" role="button">Noi Dung</a>
          <p>Color dang hien thi: {this.props.color} </p>
          <p>Font Size: {this.props.fontSize} </p>  
          </div>
      );
    }
}
export default Show
