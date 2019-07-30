import React from 'react'
import './Result.css'

const result = (props) => {
	let title = props.title
	let author = props.author
	let blurb = props.blurb
	
	
	return ( 
		<div className="result-div" id = {props.id}>
			<h1>{title}</h1>
			<h2>{author}</h2>
			<h3>{blurb}</h3>
		</div>
	)
}

export default result