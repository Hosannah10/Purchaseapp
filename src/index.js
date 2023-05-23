import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { AuthContextProvider } from './STORE/auth-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <AuthContextProvider>
   <ProSidebarProvider>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </ProSidebarProvider>
 </AuthContextProvider>




 
);
