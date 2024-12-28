import { Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import styled, { ThemeProvider as ThemeProviderSC } from 'styled-components'
import { ThemeProvider } from '@mui/material';
import { mono, monoMUI, river } from './styles/themes';

import Navbar from './components/Navbar/Navbar';
import { navRoutes } from './routes';
import Title from './components/Title';
import breakpoints from './styles/breakpoints';
import Canvas from './components/Canvas';
import { useEffect, useRef, useState } from 'react';

const StyledApp = styled.div<{ $contentTop: number, $scrollBarWidth: number }>`
  position: relative;
  /* mix-blend-mode: multiply;  */
  
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 100%;
  /* max-width: 1700px; */
 
  box-sizing: border-box;
  padding: 0px;
  /* padding: 30px 60px 20px 60px; */

  @media ${breakpoints.laptop} {
    padding: 30px 40px 20px 40px;
  }

  @media ${breakpoints.mobile} {
    padding: 20px;
  }
  
  margin: auto;

  .websiteTitleContainer {
    mix-blend-mode: multiply; 
    background: white;
    backdrop-filter: blur(5px) opacity(70%);
    /* mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%); */
    
    position: fixed;
    top: 30px;
    left: 50%;
    transform:  translateX(-50%);
    width: calc(100% - 2 * 60px);
    max-width: 1500px;
    
    /* box-shadow: 8px 0px 0 ${props => props.theme.alt}, -8px 0px 0 ${props => props.theme.alt}; */
    
    display: flex;
    gap: 20px;
    align-items: center;
    z-index: 1;
  }

  .navbarContainer {
    width: 100%;
  }

  .centerContainer {
    /* background: pink; */
    height: 100%;

    padding: ${props => `calc(${props.$contentTop}px + 30px + 20px)`} ${props => `calc(60px - ${props.$scrollBarWidth}px)`} ${props => `calc(${props.$contentTop}px + 30px + 20px)`} 60px;
  }

  .outletContainer {
    height: 100%;
    margin: auto;

    max-width: 1500px;
    display: flex;
    flex-direction: column;
    /* gap: 20px; */
  }
`

function App() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentTopPadding, setContentTopPadding] = useState<number>(0);
  const [scrollBarWidth, setScrollBarWidth] = useState<number>(0);

  useEffect(() => {
    if (!headerRef.current || !contentRef.current) return;

    const headerResizeObserver = new ResizeObserver((size) => {
      let rect = size[0].contentRect;
      // setWidth(rect.width);
      setContentTopPadding(rect.height);
    })
    headerResizeObserver.observe(headerRef.current);
    setContentTopPadding(headerRef.current.clientHeight);

    const contentResizeObserver = new ResizeObserver((size) => {
      let scrollWidth = (size[0].target as HTMLDivElement).offsetWidth - (size[0].target as HTMLDivElement).clientWidth;
      setScrollBarWidth(scrollWidth);
    })
    contentResizeObserver.observe(contentRef.current);
    setScrollBarWidth(contentRef.current.offsetWidth - contentRef.current.clientWidth);
  }, [])

  return (
    <ThemeProvider theme={monoMUI}>
      <ThemeProviderSC theme={mono}>
        <Canvas>
          <StyledApp $contentTop={contentTopPadding} $scrollBarWidth={scrollBarWidth}>
            <GlobalStyle />
            <div className={"websiteTitleContainer"} ref={headerRef}>
              <Title />
              <div className={"navbarContainer"}>
                <Navbar links={navRoutes.map(route => (route.path))} />
              </div>
            </div>
            <div className={"centerContainer"} ref={contentRef}>
              <div className="outletContainer">
                <Outlet />
              </div>
            </div>
          </StyledApp>
        </Canvas>
      </ThemeProviderSC >
    </ThemeProvider>
  );
}

export default App;
