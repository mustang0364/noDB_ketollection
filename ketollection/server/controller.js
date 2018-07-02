let id = 12;

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
    {id:11, name:'Mongolian Beef',url: "https://www.pressurecookrecipes.com/instant-pot-mongolian-beef/", image: "https://www.pressurecookrecipes.com/wp-content/uploads/2017/07/instant-pot-mongolian-beef-820x547.jpg"},
];


module.exports = {
    create: (request,response)=>{
       const {name,url,image} = request.body;
       let newRecipe={
           id: id,
           name: name,
           url: url,
           image: image,
          
       }
       recipes.push(newRecipe);
       id++;

       console.log(recipes);
       response.status(200).json(recipes);
    },
    read: (request,response)=>{
        response.status(200).send(recipes);
    },
    update: (request,response)=>{
        console.log(request.body, request.query);
        const {name, url, image} = request.body;
        const {id} = request.query;
        console.log(id)

        const recipesIndex = recipes.findIndex(recipe=> recipe.id == id);
        
                recipes[recipesIndex].id = id
                recipes[recipesIndex].name = name
                recipes[recipesIndex].url = url
                recipes[recipesIndex].image = image 
       
        response.status(200).json(recipes);
    },
    delete: (request,response)=>{
        const deleteId = request.params.id;
        recipesIndex = recipes.findIndex(recipes => recipes.id == deleteId);
        recipes.splice(recipesIndex,1);
        response.status(200).send(recipes);
    },
}