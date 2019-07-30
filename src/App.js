import React from 'react';
import './App.css';
import Search from './Search/Search'
import Filter from './Filter/Filter'
import Results from './Results/Results'

class App extends React.Component {
	state = { 
		searchTerm: '',
		printType: 'all',
		bookType: 'ebooks',
		results: [],
		error: ''
	}
	
	componentDidMount() {
		
	}

	searchHandler = (e) => {
		this.setState({searchTerm: e.target.value})
	}
	
	filterHandler = (e) => {
		if (e.target.id === 'print-types'){
			console.log(e.target.value)
			this.setState({printType: e.target.value})
		} else {
			console.log(e.target.value)
			this.setState({bookType: e.target.value})
		}
	}
	
	onSubmitHandler = (e) => {
		e.preventDefault();
		
		this.setState({results: []})
		
		let searchTerm = this.state.searchTerm
		let printType = this.state.printType
		let bookType = this.state.bookType
		const apiKey = `AIzaSyAITm1aLWDtmmfCoA67GTtEZQSOHZefWDQ`
		
		const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}&printType=${printType}&filter=${bookType}`
		
		fetch(url)
			.then(response => {
				if (response.ok){
					return response.json()
				} else {
					throw new Error('Something went wrong!')
				}
			})
			.then(response => {
				console.log(response.items)
				this.setState({results: response.items})
			}).catch(error => {
					this.setState({error: error})
			})
	}


	render(){
		return (
			<div className="App">
				<h1>Google Book Search</h1>
				<Search
					search = {this.searchHandler}
					searchTerm = {this.state.searchTerm}
					submit = {this.onSubmitHandler}
				/> 
				<Filter 
					filter = {this.filterHandler}
				/>
				<Results 
					results = {this.state.results}	
					error = {this.state.error}
				/>

			</div>
		  );	
	}
}

export default App;
