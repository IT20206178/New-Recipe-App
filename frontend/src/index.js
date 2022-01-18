import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeList from './components/RecipeList';

import Route from './router';
import App from './App';
import Navbar from './Layout/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
   
    </React.StrictMode>,
  document.getElementById('root')
);

