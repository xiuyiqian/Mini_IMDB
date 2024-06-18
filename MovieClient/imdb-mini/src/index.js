import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';   

//packages
//axios: The axios package is a popular HTTP client for making requests to APIs and other HTTP servers
//bootstrap: layout
//react-player: video player component
//@fortawesome/free-solid-svg-icons   &  @fortawesome/free-solid-svg-icons: icon
//react-router-dom: web development with React to handle routing. It enables the creation of single-page applications (SPAs) with navigation without the page refreshing as the user navigates
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

