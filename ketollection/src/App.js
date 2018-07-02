import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Delete from './Components/Delete';
import Header from './Components/Header';
import logo from './ketoLogo.png';
// import Search from './Components/Search'



const baseUrl = '/api/recipes';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      recipes: [],
     };
     this.addRecipe = this.addRecipe.bind(this);
     this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentDidMount(){
    axios.get(`${baseUrl}`).then(response =>{
      this.setState({
        recipes: response.data
      })
    })
  }
  
  addRecipe() {
    let newRecipe = {
      name: this.name.value,
      url: this.url.value,
      image: this.image.value
    };
    axios.post(`${baseUrl}`, newRecipe).then(response =>{
      this.setState({
        recipes: response.data
      })
    })

  }
  
  deleteRecipe(id){
    axios.delete(`api/recipes/${id}`).then(response => {
      this.setState({
          recipes: response.data
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
                      

                      <Delete id="deleter" id={r.id}
                        action={() => this.deleteRecipe(r.id)}
                      />
              </div>
            </div>
    })
    return (
      <div className="App">
         <div className="header">
            <Header/>
            HEADER
         </div>
          
       <div className="body-container">
           <div className="body">
           <div className ="grid-container">
                        {recipes}
               </div>
                <div className="side">
                     <br/>
                      <p>Add Recipe</p>
                   <div className ="forms">
                      
                                <input
                                  className="input"
                                  placeholder="name"
                                  ref={name => {
                                    this.name = name;
                                  }}
                                />

                                <br/>
                                <input
                                  className="input"
                                  placeholder="url"
                                  ref={url => {
                                    this.url = url;
                                  }}
                                />
                                <br/>
                            
                                <input
                                  className="input"
                                  placeholder="image"
                                  ref={image => {
                                    this.image = image;
                                  }}
                                />
                                <br/>
                                <button className="button" onClick={this.addRecipe}>
                                    Add 
                                  </button>

                                  {/* <Search/> */}
                               </div>
                    
                  </div>
                </div>
          </div> 
      </div>
      )

  }
  
}

export default App;
