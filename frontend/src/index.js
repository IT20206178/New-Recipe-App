import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeList from './components/RecipeList';

import Route from './router';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Route />
    </React.StrictMode>,
  document.getElementById('root')
);

