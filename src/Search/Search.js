import React from 'react'
import './Search.css'

const search = (props) => {
	
	return (
		<form className='search-div' onSubmit={props.submit}>
			<label htmlFor="search-input">Search:</label>
			<input type="text" id="search-input" 
				value = {props.searchTerm}
				onChange={props.search}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default search 