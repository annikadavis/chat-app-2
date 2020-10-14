import React from 'react';
import './Components.css';


function Contact(){
    return(
        <div className="Contact">
            <Avatar />
            <Name />
            <Status />
        </div>
    );
}

function Avatar(){
    return(
            <img class="avatar" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/98/985f9b4dc9177742a06472a24a34712f7673793b_full.jpg" />
        );
    }

function Name(){
    return(
        <div className="name">
            Garfield Lasagna
        </div>
    );
}

function Status(){
    return(
        <div className="status">
            <div className="status-text">
            Online
            </div>
            <div className="status-online">

            </div>

        </div>
    );
}


export default Contact;