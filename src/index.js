import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import { DataContext } from './DContext/Datas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <DataContext.Provider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </DataContext.Provider>
    
);
