import React, { Component } from 'react';
class Colorpix extends Component{
    constructor(props){
      super(props)
      this.state ={
        colors: ['red','blue','green','#ccc']
      }
    }
    showColor(color){
      console.log(this.props.color)
      return {
        backgroundColor: color,
        height: '50px',
        width: '50px'
      }
    }
    setActiveColor(color){
      this.props.onRecevie(color);
    }
    render(){
      var elementColor = this.state.colors.map((color,index) =>{
          return <span key={index} style={this.showColor(color)}
                    className={this.props.color === color ? 'active' : ''}
                    onClick={() => this.setActiveColor(color)}
          ></span>
      })
      return(
        <div>
        <div className="change-color">
          <ul className="nav justify-content-center">
            <h2>Chọn màu để đổi</h2>
          </ul>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a name id className="btn btn-primary" role="button">Đổi màu</a>
            </li>
          </ul>
          <ul className="nav justify-content-center">
              {elementColor}
          </ul>
        </div>  
        <br />
        <br />
      </div>      
      );
    }
}
export default Colorpix
