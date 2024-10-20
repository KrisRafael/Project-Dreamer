import React from "react";
import { MantineProvider } from '@mantine/core';
import MyComponents from './components/MyComponents';
import { Button } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Prihlaseni from "./components/Prihlaseni.jsx";
import Register from "./components/Register.jsx";


export function App() {
  return (
    <>
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <header className="p-5">
      <h1>UI knihovna</h1>
      <Prihlaseni />
      <Register />

      <nav>
      <Link to="přihlášní">Přihlášení</Link>
      <Link to="registrace">Registrace</Link>
      </nav>
    
      <div>
        <Button>Začít zde</Button>
      </div>
      </header>
      <main>
        <Outlet />
      </main>
      <MyComponents />
    </MantineProvider>
    </> 
  );
}

export default App;

