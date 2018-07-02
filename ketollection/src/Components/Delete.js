import React, { Component } from 'react';
import axios from 'axios';


export default function Delete(props){
    let type = props.type;
    return(
        <div>
        <button onClick={props.action}> X </button>
        </div>)

}