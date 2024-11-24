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
  
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${breakpoints.mobile} {
    gap: 0px;
  }

  height: 100%;
 
  box-sizing: border-box;
  padding: 20px;

  margin: auto;

  .centerContainer {
    height: 100%;
    overflow: hidden;
  }

  .outletContainer {
    height: 100%;
    
    max-width: 1200px;
    @media ${breakpoints.laptop} {
      max-width: 80vw;
    }
    @media ${breakpoints.mobile} {
      max-width: 100%;
    }
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
          <div>
            <Title />
          </div>
          <div className={"centerContainer"}>
            <div className="outletContainer">
              <Navbar links={navRoutes.map(route => (route.path))} />
              <Outlet />
            </div>
          </div>
        </StyledApp>
      </Canvas>
    </ThemeProvider >
  );
}

export default App;
