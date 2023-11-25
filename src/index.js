import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Component/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mens from './Component/Mens/Mens';
import Womens from './Component/Womens/Womens';
import Kids from './Component/Kids/Kids';
import Gadgets from './Component/Gadgets/Gadgets';
import HomeandKitchen from './Component/HomeandKitchen/HomeandKitchen';
import Privacy from './Component/Privacy/Privacy';
import TermsandCondition from './Component/TermsandCondition/TermsandCondition';
import Contactus from './Component/Contactus/Contactus';
import AboutUs from './Component/AboutUs/AboutUs';
import AI from './Component/AI/Ai';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/homeandkitchen" element={<HomeandKitchen />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termsandcondition" element={<TermsandCondition />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
