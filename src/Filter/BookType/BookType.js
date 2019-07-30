import React from 'react'

const bookType = (props) => {
	
	return (
		<div className="bookType-div">
			<label htmlFor="book-types"> Book Type: </label>
			
		  	<select id="book-types" onChange={props.filter}>
			  <option value="ebooks">All</option>
			  <option value="paid-ebooks">Paid</option>
			  <option value="free-ebooks">Free</option>
			</select>
		</div>
	
	)
}

export default bookType