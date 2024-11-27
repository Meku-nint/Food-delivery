import React from 'react'
import reactDOM from 'react-dom/client'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ContextProvider from './Context';
const root=reactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <ContextProvider>
           <App/>
     </ContextProvider>
    </BrowserRouter>
)
