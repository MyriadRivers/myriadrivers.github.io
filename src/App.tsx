import { Link, Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components'
import { main } from './styles/themes';

import Navbar from './components/Navbar/Navbar';
import { navRoutes } from './common';
import Title from './components/Title';
import Canvas from './components/Canvas';

const StyledApp = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;
 
  box-sizing: border-box;
  padding: 30px;

  margin: auto;

  .centerContainer {
    height: 100%;
    overflow: hidden;
  }

  .outletContainer {
    height: 100%;
    
    max-width: 1200px;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

function App() {
  return (
    <ThemeProvider theme={main}>
      <StyledApp>
        <GlobalStyle />
        <div>
          <Title />
        </div>
        <div className={"centerContainer"}>
          <div className="outletContainer">
            <Navbar options={navRoutes.map(route => (route.path))} links={navRoutes.map(route => (route.path))} />
            <Outlet />
          </div>
        </div>
      </StyledApp>
    </ThemeProvider >
  );
}

export default App;
