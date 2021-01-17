import React from "react";
import ReactDOM from 'react-dom';

import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';

import App from "./components/App";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#885454',
        },
        secondary: {
            main: '#708f4e',
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, document.querySelector('#root'));