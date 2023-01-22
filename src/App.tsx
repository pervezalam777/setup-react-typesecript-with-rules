import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	const str:string  = 'working'
	console.log('value..', str)
	const arr = [2, '4', true]
	arr[0] = 'new value'
	console.log(arr)
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
