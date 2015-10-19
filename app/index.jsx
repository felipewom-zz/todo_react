import 'array.prototype.findindex';
import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

main();

function main() {
  const app = document.createElement('div');
  app.setAttribute("id", "app");
  document.body.appendChild(app);
  //React.render(<App />, app);
  ReactDOM.render(<App />, app);
}