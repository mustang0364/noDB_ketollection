// import React, { Component } from 'react';
// import axios from 'axios';


// import SearchIcon from 'react-icons/lib/md/search';


// export default class Search extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             recipesFound:[],
//             label: '',
//             url: '',
//             image: '',
//             search:'',
//         }
//     }
//    findRecipes(){
//        axios.get(`http:/api.edamam.com/search?q=${search}&app_id=56d22535&app_key=01d375bd14696b90f242ba5c68d7dfeb&from=0&to=10&diet=low-carb`).then(response=>{
//            this.setState({
//                recipesFound: response.data,
//                label: response.data.recipe.label,
//                url: response.data.recipe.url,
//                image: response.data.recipe.image
//            })
//        })
//    }
// // startSearch(){}  

//  handleChange(text){
//      this.setState({
//          search: text
//      })
//  }

//   render() {
//     const recipesFound = this.state.recipesFound.map(r =>{
//         return <div className ="wrap" key={r.id}>
//                   <div className="gallery" >
//                   <a target='_blank' href={r.url}> <img src={r.image} alt="food" className="pics"/></a>
//                   </div>
  
//                 <div className="label-containerFlex">
//                     <div id="name">{r.label}</div>
                        
  
//                 </div>
//               </div>
//       })
//     return (
//       <section className="Search__parent">

//         <div className="Search__content">
//           <input placeholder="Search Your Feed" onChange={(e)=>this.handleChange(e.target.value)}/>
//           <SearchIcon id="Search__icon" onClick={this.startSearch}/>
//         </div>
        
//       </section>
//     )
//   }
// }