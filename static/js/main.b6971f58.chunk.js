(this["webpackJsonphangman-app"]=this["webpackJsonphangman-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),l=a.n(r),o=(a(13),a(2)),i=a(3),u=a(5),c=a(4),d=(a(14),a(15),a(1)),p=(a(16),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isClicked:!1},n.handleSelect=n.handleSelect.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"handleSelect",value:function(e){this.props.select(this.props.value),e.target.style.cursor="not-allowed",e.target.style.backgroundColor="darkgrey",e.target.disabled=!0}},{key:"render",value:function(){return s.a.createElement("div",{className:"Button"},s.a.createElement("button",{onClick:this.handleSelect},this.props.value))}}]),a}(s.a.Component)),h=(a(17),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).Select=n.Select.bind(Object(d.a)(n)),n.generateButtons=n.generateButtons.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"Select",value:function(e){this.props.select(e)}},{key:"generateButtons",value:function(){var e=this;return console.log(this.props.isArr),this.props.letters.map((function(t){return s.a.createElement(p,{key:t,value:t,select:e.Select})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"ButtonsContainer",style:{display:this.props.display}},"flex"===this.props.display?this.generateButtons():"")}}]),a}(s.a.Component));h.defaultProps={letters:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","q","t","u","v","y","w","x","z"]};var m=h,g=(a(18),["Apple","Awkward","Bagpipes","Banjo","Bungler","Croquet","Crypt","Dwarves","Fervid","Fishhook","Fjord","Gazebo","Gypsy","Haiku","Haphazard","Hyphen","Ivory","Jazzy","Jiffy","Jinx","Jukebox","Kayak","Kiosk","Klutz","Memento","Mystify","Numbskull","Ostracize","Oxygen","Pajama","Phlegm","Pixel","Polka","Quad","Quip","Rhythmic","Rogue","Sphinx","Squawk","Swivel","Toady","Twelfth","Unzip","Waxy","Wildebeest","Yacht","Zealous","Zigzag","Zippy","Zombie"]);var y=function(e){return e[Math.floor(Math.random()*e.length)]},f=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={guessCounted:0,word:y(g).toLowerCase(),guessed:new Set,result:"",display:"flex"},n.compare=n.compare.bind(Object(d.a)(n)),n.playAgain=n.playAgain.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"guessWord",value:function(){var e=this;return this.state.word.split("").map((function(t){return e.state.guessed.has(t)?t:" _"}))}},{key:"playAgain",value:function(e){document.querySelector(".result-page").style.display="none",this.setState((function(e){return{guessCounted:0,guessed:new Set,word:y(g).toLowerCase(),display:"flex",result:""}}))}},{key:"compare",value:function(e){var t=document.querySelector(".result-page"),a=this.state.word.split("");-1===a.indexOf(e)?this.state.guessCounted<10?this.setState((function(e){return{guessCounted:e.guessCounted+1}})):(t.style.display="flex",this.setState({result:" lost!!!",display:"none"})):(console.log("merhaba"+a.length+this.state.guessed.size+1),this.setState((function(t){return{guessed:t.guessed.add(e)}})),a.length===this.state.guessed.size+1&&(t.style.display="flex",this.setState({result:" win!!!",display:"none"})))}},{key:"render",value:function(){this.state.word.split("");return s.a.createElement("div",{className:"Hangman"},s.a.createElement("h1",null,"Hangman"),s.a.createElement("div",{className:"Hangman-image"},s.a.createElement("img",{src:this.props.imageAPI+this.state.guessCounted+".jpg"})),s.a.createElement("div",{className:"word"},s.a.createElement("span",{className:"dash"}," ",this.guessWord())),s.a.createElement(m,{select:this.compare,display:this.state.display}),s.a.createElement("div",{className:"answer",style:" lost!!!"===this.state.result||" win!!!"===this.state.result?{display:"block"}:{display:"none"}},this.state.word),s.a.createElement("div",{className:"result-page"},s.a.createElement("p",null,"You  ",s.a.createElement("span",{className:"result"}," ",this.state.result)),s.a.createElement("p",null," If you want to try again.Click button below!!"),s.a.createElement("button",{onClick:this.playAgain},"Play again ")))}}]),a}(s.a.Component);f.defaultProps={imageAPI:"https://www.oligalma.com/downloads/images/hangman/hangman/"};var v=f,b=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(v,null)}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b6971f58.chunk.js.map