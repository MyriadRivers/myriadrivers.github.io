import { Link, Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components'
import { main } from './styles/themes';

import Navbar from './components/Navbar/Navbar';
import { navRoutes } from './common';
import Title from './components/Title';
import Canvas from './components/Canvas';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100vh; 
  box-sizing: border-box;
  padding: 30px;

  margin: auto;

  .centerContainer {
    height: 100%;
    overflow: auto;
  }

  .outletContainer {
    height: 100%;
    overflow: hidden;
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
      <Canvas effect={5}>
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
      </Canvas>
    </ThemeProvider >
  );
}

export default App;
