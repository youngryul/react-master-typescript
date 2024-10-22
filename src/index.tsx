import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import { ThemeProvider } from "styled-components";
import {dartTheme, lightTheme} from "./theme";
import {RouterProvider} from "react-router-dom";
import router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

