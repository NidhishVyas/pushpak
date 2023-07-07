import React, { /*useState, useEffect,*/ Suspense } from "react";
import { /*useLocation,*/ Route, Routes } from "react-router-dom";
import "boxicons";
import * as ROUTES from "./Constants/routes";
import GlobalStyle from "./GlobalStyles";
import { theme } from "./Theme";
import { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Outlet from "./Pages/Outlet";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense>
          <Routes>
            <Route path={ROUTES.HOMEPAGE} element={<Home />} />
            <Route path={ROUTES.ABOUTPAGE} element={<About />} />
            <Route path={ROUTES.OUTLETPAGE} element={<Outlet />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
