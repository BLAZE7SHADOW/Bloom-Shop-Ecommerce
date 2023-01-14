import React from 'react';
import './search.css';
import SearchItem from './SEARCH-ITEM/SearchItem';

const Search = () => {
    return (
        <div className='p-search-main'>
            <div className='p-filter'>
                <h1>hhhhh</h1>
            </div>
            <div className='p-search'>
                <div className='p-search-items'>
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />

                </div>
            </div>
        </div>
    )
}

export default Search
