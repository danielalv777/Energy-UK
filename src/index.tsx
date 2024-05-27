import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './app';

const container = document.getElementById('reactMountPoint');
const root = createRoot(container);

root.render(<App />);
