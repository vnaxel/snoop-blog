import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './components/App';
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"

ReactDOM.render(
  <ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
  document.getElementById('root')
);
