import './app.css';
import { MantineProvider, Button } from '@mantine/core';
import MyComponents from './components/MyComponents';
import { Outlet, Link } from 'react-router-dom';

export function MainPage() {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <header className="p-5">
      <h1>UI knihovna</h1>
      <Link to="editace-snů">Editace snů</Link>
      <Link to="přehled-snů">Přehled snů</Link>
      <div>
        <Button>Začít zde</Button>
      </div>
      </header>
      <main>
        <Outlet />
      </main>
      <MyComponents />
    </MantineProvider>
  );
}

export default MainPage;