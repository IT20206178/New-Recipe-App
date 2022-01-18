import styles from "../assets/css/RecipeList.module.css";
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';

import{
    Label,
    Input,
    Button 
}
from 'reactstrap'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { thisExpression } from '@babel/types';

toast.configure();

function FullList(){

 



    const [recipeid , setRecipeid] = useState("");
    const [recipename , setRecipename] = useState("");
    const [ingredients , setIngredients] = useState("");
    const [description , setDescription] = useState("");
   
    const [message , setMessage] = useState("");
   

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8077/recipes/${id}`).then((res) =>{

        console.log(res.data);
        setRecipeid(res.data.recipeid);
        setRecipename(res.data.recipename);
        setIngredients(res.data.ingredients);
        setDescription(res.data.description);
       
        }).catch((err)=>{
        console.log(err);
        })
    } , []);

   
    return(

        <div>
           
            <div style = {{paddingTop :"50px"}} className ={styles.body}>
            <br/><br/><h3 className={styles.header} style = {{textAlign : 'center'}}>Recipe Details</h3><br/><br/>
            <div className = {styles.FormContainer}>
          

                <Label for = "recipeid">Driver ID</Label><br/>
                <Input type = 'text'  pattern="[R]{1}-[0-9]{3}" title = "Enter a valid Recipe  ID, EX : R-001"
                name = "recipeid" value = {recipeid}
                onChange = {(e) =>{
                    setRecipeid(e.target.value);
                }}></Input><br/>

                <Label for = "recipename">First Name</Label><br/>
                <Input type = 'text' name = "recipename" value = {recipename}
                onChange = {(e)=>{
                    setRecipename(e.target.value);
                }}></Input><br/>

                <Label for = "ingredients">Last Name</Label><br/>
                <Input type = 'text' name = "ingredients" value = {ingredients} 
                onChange = {(e)=>{
                    setIngredients(e.target.value);
                }}></Input><br/>

                

                <Label for = "description">Description</Label><br/>
                <Input type = "text" name = "description" value = {description} 
                onChange = {(e) =>{
                    setDescription(e.target.value);
                }}/><br/>

                

            </div>
          
        </div>   
        </div>

    );
}

export default FullList;