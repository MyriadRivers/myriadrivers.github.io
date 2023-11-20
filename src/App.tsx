import { Link, Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components'
import { main } from './styles/themes';

import Navbar from './components/Navbar';
import { navRoutes } from './common';

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyle />
      <Link to={"/"} >Jason Gao • 高川</Link>
      <Navbar options={navRoutes.map(route => (route.path))} links={navRoutes.map(route => (route.path))} />
      <Outlet />
    </ThemeProvider >
  );
}

export default App;
