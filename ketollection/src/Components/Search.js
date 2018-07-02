import React, { Component } from 'react';
import axios from 'axios';
const baseUrl = '/api/recipes';


export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipesFound:[],
            label: '',
            url: '',
            image: '',
            search:'',
        }
    }
   findRecipes=()=>{
       console.log(`http://api.edamam.com/search?q=${this.state.search}&app_id=56d22535&app_key=01d375bd14696b90f242ba5c68d7dfeb&from=0&to=5&diet=low-carb`)
       axios.get(`http://api.edamam.com/search?q=${this.state.search}&app_id=56d22535&app_key=01d375bd14696b90f242ba5c68d7dfeb&from=0&to=5&diet=low-carb`).then(response=>{
           console.log(response.data)
       this.setState({
               recipesFound: response.data.hits,
           })
       })
   }

   myAddRecipe = (name, url, image) => {
    let newRecipe = {
      name: name,
      url: url,
      image: image
    };
    axios.post(`${baseUrl}`, newRecipe).then(response =>{
    this.props.getUpdatedRecipes(response.data)
      
    })

  }


 handleChange = (val) => {

     this.setState({
         search: val
     })
 }

  render() {
      console.log(this.state.recipesFound)
    const recipesFound = this.state.recipesFound ? this.state.recipesFound.map((r,i) =>{
        return <div className ="wrap-found" key={r.recipe.label}>
                  <div className="gallery-found" >
                  <a target='_blank' href={r.recipe.url}> <img src={r.recipe.image} alt="food" className="pics-found"/></a>
                  </div>
                   <div className="wrap-flex">
                    <div className="label-found">
                    {r.recipe.label}   
                    
                    </div>
                    <button onClick={()=>this.myAddRecipe(r.recipe.label, r.recipe.url, r.recipe.image)} id="plus">+</button>
                   </div>
              </div>
      }): 'loading'
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search" onChange={(e)=> this.handleChange(e.target.value)}/>
          <button  onClick={this.findRecipes}>search</button>
          <div>{recipesFound}</div>
        </div>
        
      </section>
    )
  }
}