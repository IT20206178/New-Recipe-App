import styles from '../assets/css/RecipeList.module.css'
import React, {useState,useEffect} from "react"
import axios from "axios";
import { useParams } from 'react-router';

// reactstrap components
import {
  Button,
  Label,
  
  
  Input,
  Container,
  
} from "reactstrap";

// core components

export default function RecipeUpdate() {
    const [recipeid, setRecipeid]=useState("");
    const [recipename, setRecipeName]=useState("");
    const [ingredients,setIngredients]=useState("");
    const [description, setDescription]=useState("");
   
  const {id}=useParams();

  useEffect(()=>{
      axios.get(`http://localhost:8077/recipes/${id}`).then((res)=>{
          console.log(res.data);
          setRecipeid(res.data.recipeid);
          setRecipeName(res.data.recipename);
          setIngredients(res.data.ingredients);
          setDescription(res.data.description);
         

      }).catch((err)=>{
          console.log(err);
      })
  },[]);
 


  function onSubmit(e){
    e.preventDefault();
    
    const updateRecipe={
        recipeid,
        recipename,   
        ingredients,
        description
    }
    
    axios.put(`http://localhost:8077/recipes/update/${id}`, updateRecipe).then(()=>{
      alert("Recipe Updated");
      window.location.reload();

    }).catch((error)=>{
      alert(error)
    })
  }
  

 
  
  return (
    <>
   
      <div style = {{paddingTop :"50px"}} className ={styles.body}>
      <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Update Recipe</h3><br/><br/>
      <Container>
      <div className = {styles.list}>
    
      
      <form onSubmit={onSubmit} >

      <div class="container">
      <div class="row">
      <div class="col-sm">
      <label for = "recipeid"><h5>First Name</h5></label>
                  
                    
                  <Input placeholder="First Name" type="text"  value={recipeid}
                   required onChange={(e)=>{
                  setRecipeid(e.target.value);
                   }} />
    </div>
    <div class="col-sm">
    <label for = "recipename"><h5>Middle Name</h5></label>
                  
                    
                  <Input placeholder="Enter Middle Name" type="text" value={recipename}
                   onChange={(e)=>{
                  setRecipeName(e.target.value);
                   }} />
    </div>
    <div class="col-sm">
    <label for = "ingredients"><h5>Last Name</h5></label>
                  
                    
                  <Input placeholder="Enter Last Name" type="text" required value={ingredients}
                  onChange={(e)=>{
                  setIngredients(e.target.value);
                   }} />
    </div>
  </div>
</div> 
<br/>


<div class="container">
      <div class="row">
      <div class="col-sm">
     
        
      <label><h5>Address</h5></label>
                  
                  <br></br>  
                  <textarea placeholder="Enter Address" className="form-control" type="text" value={description}
                  required onChange={(e)=>{
                  setDescription(e.target.value);
                   }} />
              
    </div>
   
    
   
  </div>
</div> 
<br/>              
        
 <br/>
                 
                  <center>
                  <button type="submit" className="btn btn-primary">Update Recipe</button>
                  </center>
                </form>
               
                
         </div>   
             
                </Container>
         
       
      </div>
     
    
     
    </>
  );
}


