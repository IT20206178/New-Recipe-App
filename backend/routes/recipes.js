const router=require("express").Router();
const { response } = require("express");
let Driver=require("../models/recipe");

//add recipe
router.route("/add").post((req,res)=>{
    
    const recipeid=req.body.recipeid;
    const recipename=req.body.recipename;
    const ingredients=req.body.ingredients;
    const description=req.body.description;
    

    const newRecipe = new Recipe({
        recipeid,
        recipename,
        ingredients,
        description
      

    })
    newRecipe.save().then(()=>{
        res.json("Recipe Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//read  Recipe
router.route('/details').get((req, res) => {
    Recipe.find()
      .then(recipes => res.json(recipes))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//update recipe
router.route("/update/:id").put(async (req, res) => {
  let recipeId = req.params.id;
  const { recipeid,recipename,ingredients,description } = req.body;

  const updateRecipe = {
    recipeid,
    recipename,
    ingredients,
    description,
  };

  const update = await Recipe.findByIdAndUpdate(recipeId, updateRecipe)
    .then(() => {
      res.status(200).send({ status: "Recipe Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
});


//delete recipe
router.route("/delete/:id").delete(async (req, res) => {
  let recipeid = req.params.id;
  console.log(recipeid);
  await Recipe.findOneAndDelete({ recipeid })
    .then(() => {
      res.status(200).send({ status: "Recipe Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error deleting Recipe", error: err.message });
    });
});


//get one recipe details
router.route('/:id').get((req, res) => {
    Recipe.findById(req.params.id)
      .then(recipe => res.json(recipe))
      .catch(err => res.status(400).json('Error: ' + err));
  });





module.exports=router;