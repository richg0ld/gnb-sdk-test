import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log(1);
/**
 * 아래 코드는(_kjh) 나중에 const로 관리해도 될듯
 */

window._kjh = {
	test:() => {}
};

window.kjh = {
	setTest: callback => window._kjh.test = callback
};
console.log(2);

const $root = document.createElement('div');
$root.id="OPGG";
const $div = document.getElementsByTagName('div')[0];
$div.parentNode.insertBefore($root,$div);



ReactDOM.render(<App />, document.getElementById('OPGG'));