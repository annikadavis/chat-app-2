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
            {props.avatar}
        </div>
    );
}

function Name(props) {
    return (
        <div className="name">
            {props.name}
        </div>
    );
}

function Status(props) { console.log(props)
    return (
        props.online ?
            <div className="status">
                <div className="status-text">
                    Online
            </div>
                <div className="status-online">
                </div>
            </div> :
            <div className="status">
                <div className="status-text">
                    Offline
            </div>
                <div className="status-offline">
                </div>
            </div>
    );
}


export default Contact;