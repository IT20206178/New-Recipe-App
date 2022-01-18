import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import RecipeList from './components/RecipeList';
import FullDetails from './components/FullDetails'

const Routes = ()=>{
    return(
        <>
        <BrowserRouter>
        <Switch>

            <Route exact path ="/"  component ={RecipeList} />
            <Route exact path ="/full-recipe/:id"  component ={FullDetails} />
        </Switch>
        
        
        </BrowserRouter>
        </>
    );
}
export default Routes;