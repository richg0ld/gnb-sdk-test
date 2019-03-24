import React, { useState } from "react";

const App = () => {
	const [value, setValue] = useState('');
	const [gnbToProjectValue, setGnbToProjectValue] = useState('');
	
	const setWorld = () => setValue('world!');
	
	const setGnbToProject = () => {
		const _value = window._kjh.test() || 'Wow!';
		setGnbToProjectValue(_value);
	};
	
	return (
		<div>
			<h1>Hello {value}</h1>
			<button onClick={setWorld}>click!</button>
			<hr/>
			<div>이미 선언되어있는 함수에 외부 함수 선언시 gnb에 영향 줄 수 있는지 테스트 {gnbToProjectValue}</div>
			<button onClick={setGnbToProject}>click!</button>
			<hr/>
		</div>
	)
};

export default App;