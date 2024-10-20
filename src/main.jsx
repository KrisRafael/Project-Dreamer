import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from './app.jsx';
import './index.css';
import { MantineProvider } from '@mantine/core';

import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Link,
} from "react-router-dom";
  
import EditDream from "./components/EditDream.jsx";
import Prihlaseni from "./components/Prihlaseni.jsx";
import MainPage from "./components/MainPage.jsx";
import OverviewOfDreams from "./components/OverviewOfDreams.jsx";
import Register from "./components/Register.jsx"

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <StrictMode>
    <MantineProvider>
     <BrowserRouter>
        <Routes>
           <Route path="/" element={<App />} />
           <Route path="/editace-snů" element={<EditDream />} />
           <Route path="/hlavni-stránka" element={<MainPage />} />
           <Route path="/přehled-snů" element={<OverviewOfDreams />} />
           <Route path="/přihlášení" element={<Prihlaseni />} />
           <Route path="/registrace" element={<Register />} />
        </Routes>
      </BrowserRouter>
      </MantineProvider>
    </StrictMode>
);