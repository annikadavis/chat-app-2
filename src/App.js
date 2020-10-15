import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact name={"Garfield Lasagna"}
        avatar={"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/98/985f9b4dc9177742a06472a24a34712f7673793b_full.jpg"} 
        online={true} />
      <Contact name={"Odie Arbuckle"}
        avatar={"https://pngimage.net/wp-content/uploads/2018/06/odie-png-7.png"}
        online={false}/>
      <Contact name={"Jon Arbuckle"}
      avatar={"https://pbs.twimg.com/profile_images/534548862321848320/r3PdoIP8_400x400.jpeg"}
      online={true}/>
      <ContactList />
      </div>
      );
}

export default App;
