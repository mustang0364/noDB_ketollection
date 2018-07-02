import React, { Component } from 'react';
import axios from 'axios';
import icon from '../edit.png';
const baseUrl = '/api/recipes';


export default class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }


   updateRecipe = (id) => {
    // const { name, url,image}= this.props;
    let name = window.prompt('Please Enter a new Name');
    let url = window.prompt('Please Enter a url');
    let image = window.prompt('Please Enter a new image');
    let newRecipe = {
      name: name,
      url: url,
      image: image,
      id: id
    };
    console.log(newRecipe);
    axios.put(`${baseUrl}?id=${id}`, newRecipe).then(response =>{
    console.log(response)
    this.props.getUpdatedRecipes(response.data)
      
    })

  }


 handleChange = (val) => {

     this.setState({
         search: val
     })
 }

  render() {
      const {id, name, url,image}= this.props;
    return(
        <div>
        <button className="imageHolder"
        onClick={()=>this.updateRecipe(id)}> 
        <img className="imageDelete" src={icon}/> </button>
        </div>)
  }
}