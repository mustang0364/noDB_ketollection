const express = require('express');
const bodyParser = require('body-parser');
let newId = 0;
let food =[];

const app = express();
app.use(bodyParser.json());


let recipes = [
    {id:0, name:'Pesto Chicken',url: "https://recipes.instantpot.com/recipe/pesto-chicken/", image: "https://recipes.instantpot.com/wp-content/uploads/2018/05/Pesto-Chicken-I-Love-My-Instant-Pot-Keto-Diet-Recipe-Book-002.jpg"},
    {id:1, name:'Pulled Pork Burrito Bowls',url: "https://recipes.instantpot.com/recipe/pulled-pork-burrito-bowls/", image: "https://recipes.instantpot.com/wp-content/uploads/2018/05/1.Pulled-Pork-Burrito-Bowls_029_Siss_9781984822390_art_r1.jpg"},
    {id:2, name:'Lemon Garlic Tomato Walnut Chicken',url: "https://recipes.instantpot.com/recipe/lemon-garlic-tomato-walnut-chicken/", image: "https://recipes.instantpot.com/wp-content/uploads/2018/05/025_Siss_9781984822390_art_r1RGBcrop.jpg"},
    {id:3, name:'Strawberry Cupcakes',url: "https://recipes.instantpot.com/recipe/strawberry-cupcakes/", image: "https://recipes.instantpot.com/wp-content/uploads/2018/05/17.Cupcake-Strawberry036_Siss_9781984822390_art_r1RGBcrop.jpg"},
    {id:4, name:'Layered Zucchini Lasagna',url: "https://recipes.instantpot.com/recipe/layered-zucchini-lasagna/", image: "https://recipes.instantpot.com/wp-content/uploads/2018/05/Layered-Zucchini-Lasagna-I-Love-My-Instant-Pot-Keto-Diet-Recipe-Book-002.jpg"},
    {id:5, name:'Crustless Berry Cheesecake',url: "https://recipes.instantpot.com/recipe/crustless-berry-cheesecake/", image: "https://recipes.instantpot.com/wp-content/uploads/2018/05/Crustless-Berry-Cheesecake-I-Love-My-Instant-Pot-Keto-Diet-Recipe-Book-002.jpg"},
    {id:6, name:'Sous Vide - Steak',url: "https://recipes.instantpot.com/recipe/steak-sous-vide/", image: "https://recipes.instantpot.com/wp-content/uploads/2018/02/iStock-476332750-002.jpg"},
    {id:7, name:'CocoNutty Salted Chocolate Cheesecake',url: "https://recipes.instantpot.com/recipe/coconutty-salted-chocolate-cheesecake/", image: "https://recipes.instantpot.com/wp-content/uploads/2017/06/CocoNutty-Salted-Chocolate.jpg"},
    {id:8, name:'Cauliflower Curry',url: "https://recipes.instantpot.com/recipe/cauliflower-curry/", image: "https://recipes.instantpot.com/wp-content/uploads/2018/05/23.CAULIFLOWER-CURRY1.jpg"},
    {id:9, name:'Fathead pizza',url: "https://www.lowcarbmaven.com/low-carb-pepperoni-pizza/", image: "https://d104wv11b7o3gc.cloudfront.net/wp-content/uploads/2016/03/low-carb-pepperoni-pizza-7-600x800.jpg"},
    {id:10, name:'Strawberry Cheesecake Fat Bombs',url: "https://ketodietapp.com/Blog/lchf/Strawberry-Cheesecake-Fat-Bombs", image: "https://files.ketodietapp.com/Blog/files/2014/08/StrawberryCheesecakeFatBombs_blog1.jpg"},
    {id:11, name:'Mongolian Beed',url: "https://www.pressurecookrecipes.com/instant-pot-mongolian-beef/", image: "https://www.pressurecookrecipes.com/wp-content/uploads/2017/07/instant-pot-mongolian-beef-820x547.jpg"},
];

app.get('/api/recipes',(req, res) => {
   res.status(200).json(recipes);
});

app.post('/api/recipes',(req, res) => {
    let {name,url,image} = req.body;
    food.push({id,name,url,image});
    id++;
    res.status(200).json(recipes);
});

app.put('/api/recipes/:id',(req, res) => {
    const {id} = req.params.id;

    const recipeIndex = food.findIndex(food => food.id == updateId);
    let food = food[recipeIndex];

    food[recipeIndex] = {
        id: food.id,
        name: name || food.name,
        url: url || food.url,
        image: image || food.image,
    }
    res.status(200).json(recipes);
});

app.delete('/api/recipes/:id',(req,res)=>{
    const deleteId = req.params.id;
    recipeIndex= food.findIndex(food => food.id == deleteId);
    food.splice(recipeIndex,1);
    res.status(200).json(recipes);
});

const port = 4000;
app.listen(port, () => console.log('server now listening to port 4000'))