import React, { Component } from 'react';

import { CardList } from '../src/components/card-list/card-list';
import { SearchBox } from '../src/components/search-box/search-box';

import './App.css';

class App extends Component {
	state = {
		monsters: [],
		searchField: '',
	};

	handleChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) =>
				this.setState({
					monsters: users,
				})
			);
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<SearchBox
					handleChange={this.handleChange}
					placeholder={'search monster'}
				></SearchBox>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
