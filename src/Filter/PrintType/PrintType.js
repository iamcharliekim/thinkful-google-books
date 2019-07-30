import React from 'react'
import './PrintType.css'

const printType = (props) => {
	
	return (
		<div className="printType-div">
			<label htmlFor="print-types"> Print Type: </label>
			<select id="print-types" onChange={props.filter}>
			  <option value="all">All</option>
			  <option value="books">Books</option>
			  <option value="magazines">Magazines</option>
			</select>
			
		</div>
	)
}

export default printType