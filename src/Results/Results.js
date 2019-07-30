import React from 'react'
import Result from './Result/Result'
import './Results.css'

const results = (props) => {
	
	let resultsArr = props.results
	let searchResults
	
	if (resultsArr.length){
		searchResults = resultsArr.map(result => {
		return <a href={result.volumeInfo.canonicalVolumeLink} target="_blank" rel="noopener noreferrer" key = {result.etag}>
					<Result 
						title = {result.volumeInfo.title} 
						author = {result.volumeInfo.authors} 
						blurb = {result.volumeInfo.description} 
						id = {result.id} 
					/>
				</a>
		})
		
	}
	
	if (props.error !== ''){
		searchResults = <h1>{props.error}</h1>
	}
	
	
	
	return (
		<ul className="results-list">
			{searchResults}
		</ul>
	
	)
}

export default results