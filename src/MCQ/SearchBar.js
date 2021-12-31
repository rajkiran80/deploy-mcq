import React from 'react'
import css from './SearchBar.css'
import {Link} from 'react-router-dom'

const SearchBar=()=>{
    return(
        <div className='searchBarContainer'>
            <div className='searchBar'>
                <div className='search-containers'>
                    <Link to="/"><i class="fas fa-arrow-circle-left"></i></Link>
                    <input type="text" placeholder='Search'/>
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
    )
}
export default SearchBar