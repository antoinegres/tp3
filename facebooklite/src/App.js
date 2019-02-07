import React, { Component } from 'react';
import './App.css';
import './Components/boutons.css';
import Bouton from './Components/boutons';

class App extends Component {
  render() {
    return (
        <main>
        <header>
        <section id="butons">
            <button class="button button3">Marie</button>
            <button class="button button2">François</button>
            <button class="button button1">Antoine</button>
        </section>
        </header>
        <center>
            <section id="profil">
                <center>
                    <div class="roundedImage">
                        <img src="pp.jpg" width="200" height="200"/>
                    </div>
                </center>
                    <h1 class="prenom">Prénom</h1>
                    <h1 class="nom">Nom</h1>
                    <h1 class="date">Date de naissance</h1>
                    <button class="button button4">Change Style</button>
            </section>
       
            <section id="bio">
                <center>
                    <p class="bio">biographiemmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                    <p>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                    <p>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                </center>
                    <button class="button button5">C est super !</button>
            </section>
        </center>
        </main>
        
                
            
        
        
    );
  }
}

export default App;
