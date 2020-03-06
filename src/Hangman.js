import React from 'react'
import ButtonsContainer from './ButtonsContainer'
import  './Hangman.css'
import words from './words'
import choice from './choice'

class Hangman extends React.Component{
  static defaultProps = {
    imageAPI:'https://www.oligalma.com/downloads/images/hangman/hangman/',

  }
  constructor(props){
    super(props)
    this.state = {
    guessCounted:0,word:choice(words).toLowerCase(),guessed:new Set(),result:'',display:'flex'}
    this.compare = this.compare.bind(this)
    this.playAgain = this.playAgain.bind(this)
  }
   guessWord(){
     return  this.state.word.split('').map(ltr =>  this.state.guessed.has(ltr) ? ltr :' _'  )
   }
   playAgain(e){

          const  resultPage =  document.querySelector('.result-page')
          resultPage.style.display='none';
          this.setState(st =>({guessCounted:0,guessed:new Set(),word:choice(words).toLowerCase(),display:'flex',result:''}))

   }
   compare(e)
   {
      const copyArr =[]
      let  resultPage = document.querySelector('.result-page')
      const wordCharArray = this.state.word.split('')
      const index = wordCharArray.indexOf(e)
        if(index === -1){
              if(this.state.guessCounted<10){
                  this.setState(st=>({guessCounted:st.guessCounted+1}))
               }
              else
                  {
                        resultPage.style.display='flex';
                        this.setState({result:' lost!!!',display:'none'})

                  }
            }
       else {
              console.log('merhaba'+wordCharArray.length+this.state.guessed.size+1);
               this.setState(st => ({guessed:st.guessed.add(e)}))


               if(wordCharArray.length === this.state.guessed.size+1){
                 resultPage.style.display='flex';
                 this.setState({result:' win!!!',display:'none'})

               }

            }

  }

  render(){

          const wordCharArray = this.state.word.split('')
          return(
            <div className='Hangman'>
               <h1>Hangman</h1>
               <div className='Hangman-image'>
                <img src={this.props.imageAPI+this.state.guessCounted+'.jpg'}/>
               </div>
               <div className='word'>
                <span className='dash'> {this.guessWord()}</span>
              </div>
                   <ButtonsContainer   select={this.compare} display={this.state.display}  />
                   <div className='answer' style={this.state.result === ' lost!!!' || this.state.result === ' win!!!'? { display:'block'}:{ display:'none'}}>{this.state.word}</div>
                   <div className='result-page'>
                    <p>You  <span  className='result'> {this.state.result}</span></p>
                    <p> If you want to try again.Click button below!!</p>
                    <button onClick={this.playAgain}>Play again </button>
                  </div>
            </div>

    )
  }
}
export default Hangman
