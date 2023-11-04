import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductComponent from './components/Product_component'
import Coffee from './images/Cup.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductComponent name='Kawa' price='14.99' image={Coffee}/>
    <ProductComponent name='Kawa' price='14.99' image={Coffee}/>
    <ProductComponent name='Kawa' price='14.99' image={Coffee}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
