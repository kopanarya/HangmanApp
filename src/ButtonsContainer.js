import React from 'react'
import Button from './Button'
import './ButtonsContainer.css'

class ButtonsContainer extends React.Component{
  static defaultProps ={
    letters:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','q','t','u','v','y','w','x','z']
  }
 constructor(props){
   super(props)


   this.Select = this.Select.bind(this)

  //   this.playAgain = this.playAgain.bind(this)
     this.generateButtons = this.generateButtons.bind(this)

 }


 Select(e){

    this.props.select(e);

 }

 generateButtons(){
   console.log(this.props.isArr);
   const buttons =
   this.props.letters.map(l =>
     <Button key={l}
            value={l}
            select={this.Select}

            />)
          //  console.log(this.props.isPlayAgain);
            return buttons
 }

 render(){

   return(
     <div className='ButtonsContainer' style={{display:this.props.display}}>
       {this.props.display === 'flex' ? this.generateButtons() : ''}
     </div>
   )
 }
}
export default ButtonsContainer
