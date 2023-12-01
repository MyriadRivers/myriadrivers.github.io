import { Link, Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components'
import { main } from './styles/themes';

import Navbar from './components/Navbar/Navbar';
import { navRoutes } from './common';
import Title from './components/Title';
import Canvas from './components/Canvas';

const StyledApp = styled.div`
  /* background: purple; */
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100vh; 
  box-sizing: border-box;
  padding: 20px;

  margin: auto;

  .centerContainer {
    height: 100%;
    overflow: auto;
  }

  .outletContainer {
    height: 100%;
    overflow: auto;
    max-width: 1200px;
    margin: auto;
  }
`

function App() {
  return (
    <ThemeProvider theme={main}>
      <Canvas effect={5}>
        <StyledApp>
          <GlobalStyle />
          <div>
            <Title />
          </div>
          <Navbar options={navRoutes.map(route => (route.path))} links={navRoutes.map(route => (route.path))} />
          <div className={"centerContainer"}>
            <div className="outletContainer">
              <Outlet />
            </div>
          </div>
        </StyledApp>
      </Canvas>
    </ThemeProvider >
  );
}

export default App;
