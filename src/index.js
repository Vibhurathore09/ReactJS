import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { createRoot } from 'react-dom/client';


import App from './App';
// ReactDOMClient.createRoot(<App/> , document.getElementById('root'));
// ReactDom.render();
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);