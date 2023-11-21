import { Link, Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components'
import { main } from './styles/themes';

import Navbar from './components/Navbar';
import { navRoutes } from './common';
import Heading from './components/Heading';
import Title from './components/Title';

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyle />
      <Link to={"/"} ><Title /></Link>
      <Navbar options={navRoutes.map(route => (route.path))} links={navRoutes.map(route => (route.path))} />
      <Outlet />
    </ThemeProvider >
  );
}

export default App;
