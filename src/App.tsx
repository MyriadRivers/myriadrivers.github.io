import { Link, Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components'
import { main } from './styles/themes';

import Navbar from './components/Navbar/Navbar';
import { navRoutes } from './common';
import Title from './components/Title';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

function App() {
  return (
    <ThemeProvider theme={main}>
      <StyledApp>
        <GlobalStyle />
        <Title />
        <Navbar options={navRoutes.map(route => (route.path))} links={navRoutes.map(route => (route.path))} />
        <Outlet />
      </StyledApp>
    </ThemeProvider >
  );
}

export default App;
