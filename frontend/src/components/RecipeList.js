import React  from "react";
import RecipeStyles from "../assets/css/RecipeList.module.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function RecipeList() {
    const [recipes, setrecipes] = useState([]);
    
    const deleteRecipe = (recipe) => {
      if (
        window.confirm(
          "Recipe " +
            recipe.recipeid +
            " (" +
            recipe.recipename +
            " " +
            
            "will be removed from the database"
        )
      ) {
        axios
          .delete(`http://localhost:8077/recipes/delete/${recipe.recipeid}`)
          .then((res) => {
            console.log(res);
            toast.success("Recipe deleted!", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 5000,
              hideProgressBar: false,
            });
          })
          .catch((err) => {
            console.log(err);
            toast.error("Something went wrong :(", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 10000,
              hideProgressBar: false,
            });
          });
        let filteredRecipes = recipes.filter((rid) => rid !== recipe);
        setrecipes(filteredRecipes);
      }
    };
  
    useEffect(() => {
      axios
        .get("http://localhost:8077/recipes/details")
        .then((res) => {
          setrecipes(res.data);
        })
        .catch((err) => {
          alert("Something went wrong :(");
          console.log(err);
        });
  
      return () => {
        // cleanup
      };
    }, []);
  
    let history = useHistory();
  
    
    return (
      <>
    
      <div className="container">
        <div className={RecipeStyles.viewrecipeDiv}>
          <center><h3 className={RecipeStyles.header}>Recipe List</h3></center>
          <br />
        
          <table width="100%" border="2px" className={RecipeStyles.tbldata}>
            <tr>
              
              <th className={RecipeStyles.tbldata}>Recipe ID</th>
              <th className={RecipeStyles.tbldata}>Recipe Name</th>
              <th className={RecipeStyles.tbldata}>Actions</th>
            
            </tr>
            {recipes
             
              .map((recipe) => (
                <tr className={RecipeStyles.tbldata}>
                  <td className={RecipeStyles.tbldata}>{recipe.recipeid}</td>
                  <td className={RecipeStyles.tbldata}>{recipe.recipename}</td>
                
                  <td className={RecipeStyles.tbldata}>
                    <button
                      className={RecipeStyles.btnEdit}
                      onClick={() => {
                        //     handleEdit(recipe);
                        history.push(`/edit-recipe/${recipe._id}`);
                      }}
                    >
                      Edit
                    </button>
  
                    <button
                      className={RecipeStyles.btnDelete}
                      onClick={() => {
                        deleteRecipe(recipe);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
        </div>
  
      
      </>
    );
  }
  
  export default RecipeList;
  