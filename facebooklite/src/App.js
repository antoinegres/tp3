import React, { Component } from 'react';
import './App.css';
import './Components/boutons.css';
import Bouton from './Components/boutons';

//import ant from './ant.jpg';

class App extends Component {
    
  constructor() {
     super();
     this.state = {
       value: 0,
       prenom: 'Prenom',
       nom: 'Nom',
       date: 'Date de Naissance',
       bio: 'Biographie',
       color: '#e7e7e7',
       //color: '#008CBA',     
       pic: require('./user.jpg'),
       sup: 0,
       supa: 0,
       supf: 0,
       supm: 0,
     }
   }
    
  SuperClick = () => {
     this.setState({
       value: this.state.value + 1
     });
  }
  
  AntoineClick = () => {
     this.setState({
       prenom: 'Antoine',
       nom: 'Grès',
       date: '21/05/1997',
       bio: 'Je suis Antoine !', 
       //color: '#008CBA',
       pic: require('./ant.jpg'),
       sup: this.state.supa,
     });
  }
  
  FranClick = () => {
     this.setState({
       prenom: 'François',
       nom: 'Sabatier',
       date: '12/04/1979',
       bio: 'Je suis François !',
       //color: '#e7e7e7',
       pic: require('./fra.jpg'),
       sup: this.state.supf,
     });
  }
  
  MarieClick = () => {
     this.setState({
       prenom: 'Marie',
       nom: 'Lembrez',
       date: '03/06/1799',
       bio: 'Je suis Marie !', 
       //color: '#f44336',
       pic: require('./mar.jpg'),
       sup: this.state.supm,
     });
  }
  
  ChangeClick = () => {
      if (this.state.value%2==1){
          this.setState({
            color: '#008CBA',
          });
      }
      else {
        this.setState({
          color: '#f44336',
        });
      }
      this.setState({
            value: this.state.value +1,
          });
  }
  
  SuperClick = () => {
      if ( this.state.prenom == 'Antoine'){
          this.setState({
          supa: this.state.supa +1,
          sup: this.state.supa,
          });
      }
      else if (this.state.prenom == 'François'){
          this.setState({
          supf: this.state.supf +1,
          sup: this.state.supf,
          });
      }
      else if (this.state.prenom == 'Marie'){
          this.setState({
          supm: this.state.supm +1,
          sup: this.state.supm,
          });
      }
  }
     
    
  render() {
    return (
        <main>
        <header>
        <section id="boutons">
            <button class="button button3" onClick={this.MarieClick}>Marie</button>
            <button class="button button2" onClick={this.FranClick}>François</button>
            <button class="button button1" onClick={this.AntoineClick}>Antoine</button>
        </section>
        </header>
        <center>
            
            <section id="profil" style={{backgroundColor: this.state.color }}>
                <center>
                    <div class="roundedImage">
                        <img src={this.state.pic} width="200" height="200"/>
                    </div>
                </center>
                    <h1 class="prenom">{this.state.prenom}</h1>
                    <h1 class="nom">{this.state.nom}</h1>
                    <h1 class="date">{this.state.date}</h1>
                    <button class="button button4" onClick={this.ChangeClick}>Change Style</button>
            </section>
       
            <section id="bio" style={{backgroundColor: this.state.color }}>
                <center>
                    <h1 class="bio">{this.state.bio}</h1>
                    
                </center>
                    <button class="button button5" onClick={this.SuperClick}>Super ! ({this.state.sup})</button>
            </section>
        </center>
        </main>
        
                
            
    
   
        
        
    );
  }
}

export default App;
