import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)


ReactDOM.render(app,document.getElementById('app'));