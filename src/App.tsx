import { Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components'
import { mono, river } from './styles/themes';

import Navbar from './components/Navbar/Navbar';
import { navRoutes } from './routes';
import Title from './components/Title';
import breakpoints from './styles/breakpoints';
import Canvas from './components/Canvas';

const StyledApp = styled.div`
  position: relative;
  /* mix-blend-mode: multiply;  */
  
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;
 
  box-sizing: border-box;
  padding: 30px 60px 20px 60px;

  @media ${breakpoints.laptop} {
    padding: 30px 40px 20px 40px;
  }

  @media ${breakpoints.mobile} {
    padding: 20px;
  }
  
  margin: auto;

  .websiteTitleContainer {
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .navbarContainer {
    width: 100%;
  }

  .centerContainer {
    height: 100%;
    overflow: hidden;
  }

  .outletContainer {
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

function App() {
  return (
    <ThemeProvider theme={mono}>
      <Canvas>
        <StyledApp>
          <GlobalStyle />
          <div className={"websiteTitleContainer"}>
            <Title />
            <div className={"navbarContainer"}>
              <Navbar links={navRoutes.map(route => (route.path))} />
            </div>
          </div>
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
