import React from 'react'


const SearchBox =({searchChange}) => {
	return (
		<div>
			<input 
				className= "pa2 w-30 br2" 
				type="text" 
				name="search" 
				placeholder="Enter robot name to search"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox	