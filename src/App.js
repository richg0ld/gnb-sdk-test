import React, { useState } from "react";

const App = () => {
	const [value, setValue] = useState('');
	
	const setWorld = () => setValue('world!');
	
	return (
		<div>
			<h1>Hello {value}</h1>
			<button onClick={setWorld}>click!</button>
		</div>
	)
};

export default App;