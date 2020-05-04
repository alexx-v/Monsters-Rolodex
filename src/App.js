import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [
				{
					name: 'Frankenstein',
				},
				{
					name: 'Dracula',
				},
				{
					name: 'Zombie',
				},
			],
		};
	}

	render() {
		return <div className='App'></div>;
	}
}

export default App;
