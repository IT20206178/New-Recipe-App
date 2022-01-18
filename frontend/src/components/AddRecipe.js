import styles from '../assets/css/AddRecipe.module.css'
import React, {useState} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// reactstrap components
import {
  Button,
  Label,
  
  
  Input,
  Container,
  
} from "reactstrap";

// core components

toast.configure();

export default function AddRecipe() {
  const [recipeid, setRid]=useState("");
  const [recipename, setRname]=useState("");
  const [ingredients,setIngredients]=useState("");
  const [description, setdescription]=useState("");
 
 
 


  function sendData(e){
    e.preventDefault();
    
    const newRecipe={
     recipeid,
     recipename,   
     ingredients,
     description
    
    }
    
    axios.post("http://localhost:8077/recipes/add", newRecipe).then(()=>{
      alert("Recipe Added");
      window.location.reload();

    }).catch((error)=>{
      alert(error)
    })
  }
  

 
  
  return (
    <>
   
      <div style = {{paddingTop :"50px"}} className ={styles.body}>
      <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Insert New Recipe</h3><br/><br/>
      <Container>
      
      <form onSubmit={sendData} >

      <div class="container">
      <div class="row">
      <div class="col-sm">
      <label for = "recipeid"><h5>Recipe ID</h5></label>
                  
                    
                  <Input placeholder="Insert Recipe ID" type="text" 
                   required onChange={(e)=>{
                  setRid(e.target.value);
                   }} />
    </div>
    <div class="col-sm">
    <label for = "recipename"><h5>Recipe Name</h5></label>
                  
                    
                  <Input placeholder="Enter Recipe Name" type="text" required onChange={(e)=>{
                  setRname(e.target.value);
                   }} />
    </div>
    <br/>
    
  </div>
</div> 
<br/>


<div class="container">
      <div class="row">
      <div class="col-sm">
      <label for = "recipeid"><h5>Ingredients</h5></label>
                  
                    
                  <Input placeholder="Enter All Ingredients" type="text" 
                   required onChange={(e)=>{
                  setIngredients(e.target.value);
                   }} />
    </div>
   
    </div>
  </div>

<br/>



<div class="container">
      <div class="row">
      <div class="col">
     
        
      <label><h5>Description</h5></label>
                  
                    
    </div>
   
    </div>

  

                <textarea onChange={(e)=>{
                  setdescription(e.target.value);}}
                   type="text" 
                className="form-control" placeholder="Enter the description" pattern="{1,300}" required />
</div> 
<br/>              
                
             
               
    
 <br/>
                 
                  <center>
                  <button type="submit" className="btn btn-primary">Add Recipe</button>
                  </center>
                </form>
                </Container>
                
            
             
        
         
       
      </div>
  
    </>
  );
}


