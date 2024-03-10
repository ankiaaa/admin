import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"


import reportWebVitals from './reportWebVitals';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

import Dashboard from './common/Dashboard';
import Addproduct from './pages/Addproduct';
import Addcategory from './pages/Addcategory';
import AddSlider from './pages/AddSlider';
import Viewproduct from './pages/Viewproduct';
import Viewcategory from './pages/Viewcategory';
import ViewSlider from './pages/ViewSlider';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
  {
    path :"/",
    element:<Login/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path : "/addproduct",
    element:<Addproduct/>
  },
  {
    path: "/addcategory",
    element:<Addcategory/>
  },
  {
    path: "/addslider",
    element:<AddSlider/>
  },
  {
    path: "/Viewproduct",
    element:<Viewproduct/>
  },
  {
    path: "/Viewcategory",
    element:<Viewcategory/>
  },
  {
    path: "/Viewslider",
    element:<ViewSlider/>
  },
  {
    path: "/Home",
    element:<Home/>
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
