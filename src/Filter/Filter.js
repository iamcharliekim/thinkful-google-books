import React from 'react'
import PrintType from './PrintType/PrintType'
import BookType from './BookType/BookType'


const filter = (props) => {
	
	return (
		<div className="filter-div">
			<PrintType filter = {props.filter}/>
			<BookType filter = {props.filter}/>
		</div>
	)
}

export default filter