import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const $root = document.createElement('div');
$root.id="OPGG";
const $div = document.getElementsByTagName('div')[0];
$div.parentNode.insertBefore($root,$div);

ReactDOM.render(<App />, document.getElementById('OPGG'));