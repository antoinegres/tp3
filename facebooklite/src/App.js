import React, { Component } from 'react';
import './App.css';
import './Components/boutons.css';
import Bouton from './Components/boutons';

//import ant from './ant.jpg';

class App extends Component {
    
  constructor() {
     super();
     this.state = {
       value: false,
       prenom: 'Prenom',
       nom: 'Nom',
       date: 'Date de Naissance',
       bio: 'biographie',
       color: '#e7e7e7',
       pic: require('./user.jpg'),
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
       color: '#008CBA',
       pic: require('./ant.jpg'),
         
     });
  }
  
  FranClick = () => {
     this.setState({
       prenom: 'François',
       nom: 'Sabatier',
       date: '12/04/1979',
       bio: 'Je suis François !',
       color: '#e7e7e7',
       pic: require('./fra.jpg'),
     });
  }
  
  MarieClick = () => {
     this.setState({
       prenom: 'Marie',
       nom: 'Lembrez',
       date: '03/06/1799',
       bio: 'Je suis Marie !', 
       color: '#f44336',
       pic: require('./mar.jpg'),
     });
  }
  
  ChangeClick = (e) => {
      
      
      
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
                    <button class="button button4" onClick={this.ChangeClick(this.state.value)}>Change Style</button>
            </section>
       
            <section id="bio" style={{backgroundColor: this.state.color }}>
                <center>
                    <p class="bio">{this.state.bio}</p>
                </center>
                    <button class="button button5">C est super !</button>
            </section>
        </center>
        </main>
        
                
            
    
   
        
        
    );
  }
}

export default App;
