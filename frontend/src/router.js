import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import RecipeList from './components/RecipeList';

const Routes = ()=>{
    return(
        <>
        <BrowserRouter>
        <Switch>

            <Route exact path ="/"  component ={RecipeList} />
        </Switch>
        
        
        </BrowserRouter>
        </>
    );
}
export default Routes;