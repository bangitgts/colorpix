import { Component } from 'react';
import './App.css';
import Colorpix from './component/colorpix'
import Reset from './component/reset'
import Show from './component/show'
import Setting from './component/setting'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    }
    
  }
  onSetColor =  (prams) => {
    this.setState({
      color: prams
    })
  }
  onReFont = (font) =>{
    this.setState({fontSize: font})
  }
  render()
    {
      return (
      <div>
        <Colorpix color={this.state.color} onRecevie={this.onSetColor}/>
        <Setting setfontSize={this.state.fontSize} onReFontSize={this.onReFont}/>
        <Reset />
        <Show color={this.state.color} fontSize={this.state.fontSize}/>
      </div>
      )
    }
}
export default App