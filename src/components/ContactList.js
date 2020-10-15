import React, { useState } from 'react';
import Contact from './Contact'

function ContactList() {
const [users, setUsers] = useState ([
    {
      name: 'Dr. Liz Wilson',
      avatar: 'https://static.wikia.nocookie.net/garfield/images/5/5c/Dr._Liz_Wilson.jpg/revision/latest/top-crop/width/360/height/450?cb=20161218055337',
      online: false
    },
    {
      name: 'Arlene',
      avatar: 'https://static.wikia.nocookie.net/garfield/images/c/c1/ArlenevCharacter.jpg/revision/latest/top-crop/width/360/height/450?cb=20161218065209',
      online: true
    },
    {
      name: 'Pooky',
      avatar: 'https://static.wikia.nocookie.net/garfield/images/6/6f/PookyCharacter.jpg/revision/latest/top-crop/width/360/height/450?cb=20161218074249',
      online: true
    },
    {
      name: 'Nermal',
      avatar: 'https://static.wikia.nocookie.net/garfield/images/f/fb/NermalCharacter.jpg/revision/latest?cb=20200210202040',
      online: false
    },
    {
      name: 'Lyman',
      avatar: 'https://s3.amazonaws.com/s3.mp-cdn.net/3d/c1/f902854a2dd8d0b308efa9cb8c07-should-lyman-the-original-owner-of-odie-should-lyman-return-to-the-garfield-comic-strip-by-ji.jpg',
      online: true
    }
]);

return (
    <div className="contact">
        {users.map(user => (
            <Contact name={user.name} avatar={user.avatar} online={user.online}/>
        ))}
    </div>
)

 }

 export default ContactList;