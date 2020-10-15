import React from 'react';
import './Components.css';


function Contact(props) { 
    return (
        <div className="Contact">
            <Avatar avatar={props.avatar} />
            <Name name={props.name} />
            <Status online={props.online}/>
        </div>
    );
}

function Avatar(props) {
    return (
        <div className="avatar">
        <img className="avatar" src={props.avatar} alt="user"/>
        </div>
    );
}

function Name(props) {
    return (
        <div className="Contact">
        <div className="contactText">
        <p className="name">{props.name}</p>
        </div></div>
    );
}

function Status(props) { 
    return (
        <div className="status">
        <div className={props.online? "status-online" : "status-offline"}></div>
        <p className="status-text">{props.online? "online" : "offline"}</p>
    </div>   
    );
}


export default Contact;