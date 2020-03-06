import React from 'react'
import './Button.css'

class Button extends React.Component{
  constructor(props){
    super(props)
    this.state = {isClicked:false}
    this.handleSelect = this.handleSelect.bind(this)


  }
  handleSelect(e){
    this.props.select(this.props.value)
    e.target.style.cursor='not-allowed'
    e.target.style.backgroundColor='darkgrey'
    e.target['disabled']=true

  }


  render(){
  

    return(
      <div className='Button'>
      <button  onClick={this.handleSelect}  >{this.props.value}</button>
       </div>
    )
  }
}
export default Button
