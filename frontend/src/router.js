import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import RecipeList from './components/RecipeList';
import FullDetails from './components/FullDetails';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe'
import navar from './components/navbar';

const Routes = ()=>{
    return(
        <>
        <BrowserRouter>
        <Switch>
            
            <Route exact path ="/"  component ={RecipeList} />
            <Route exact path ="/full-recipe/:id"  component ={FullDetails} />
            <Route exact path ="/addr"  component ={AddRecipe} />
            <Route exact path ="/edit-recipe/:id"  component ={EditRecipe} />
        </Switch>
        
        
        </BrowserRouter>
        </>
    );
}
export default Routes;