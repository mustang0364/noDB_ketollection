import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Plus from './Components/Plus';
import Add from './Components/Add';
import MealPlan from './Components/MealPlan';

const baseUrl = "/api/recipes"

class App extends Component {
  constructor(){
    super();

    this.state ={
      recipesToDisplay: [],
      recipes: [],
       userInput:"",
    }

    this.handleChange = this.handleChange.bind(this);
    // this.addToPlan = this.addToPlan.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    // this.searchRecipe = this.searchRecipe.bind(this);
  }
  componentDidMount(){
    axios.get(`${baseUrl}`).then(results =>{

      this.setState({ recipes: results.data});
    })
  }

  handleChange(event){
    this.setState({
      userInput: event.target.value
    })

  }

  // addToPlan(event){
  //   const {name} = this.state.recipes;
  //   if(event)
  //   this.setState({ 
  //     name: result.data.name,
  //   })
  // }

  deleteRecipe(id){
    axios.delete(`${baseUrl}/${id}`).then(response =>{
      this.setState({
        recipes: response.data
      })
    })
  }

  addRecipe(){
    let newRecipe = {
      name: this.name.value,
      url: this.url.value,
      image: this.image.value
    }
    axios.post(`${baseUrl}`, newRecipe).then(response =>{
      this.setState({
        recipesToDisplay: response.data
      })
    })
  }


  render() {
    const recipes = this.state.recipes.map(r =>{
      return <div className ="wrap" key={r.id}>
          <div className="gallery" >
                <a target='_blank' href={r.url}> <img src={r.image} alt="food" className="pics"/></a>
            </div>

            <div className="label-containerFlex">
            <div id="name">{r.name}</div>
            <Plus className="icon" id={r.id}
            type='add'
            action={this.addToPlan}/>

              <Plus className="icon" id={r.id}
              action={this.deleteRecipe}
              type='delete'/>

            </div>
         </div>
    })
      return (
        <div>
         <div className="header">
            <div className="panel">PANEL</div>
         </div>
          
        <div className="body-container">
           <div className="body-flex">
                <div className="side-panel">SIDE
                    <div id="top">ADD-RECIPE</div>
                    <div id="bottom">MENUPLAN</div>
                </div>
                <div className="gallery-panel">
                <div className ="grid-container">
                  {recipes}
                </div>
                </div>
           </div>
        </div> 
        </div>
      )

  }
  
}

export default App;
