import React, { Component } from 'react';
import axios from 'axios';


export default function Delete(props){
    let type = props.type;
    return(
        <div>
        <button className="imageHolder"
        onClick={props.action}> 
        <img className="imageDelete" src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/close_red.png"/> </button>
        </div>)

}