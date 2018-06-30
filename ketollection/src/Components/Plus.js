import React, { Component } from 'react';
import myImage from '../add_green.png';
import deleteImage from '../cancel.png'
import axios from 'axios';


export default function Plus(props){
    let type = props.type;
    return(
    <div onClick={props.action(props.id)}>{type == 'add' ? <img src={myImage} className="icon"/>:<img src={deleteImage} className="icon" />}</div>)
    

}