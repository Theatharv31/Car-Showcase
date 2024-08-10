"use client"
import React from 'react'
import {SearchManufacturer} from './';
import { useState } from 'react';

const SearchBar = () => {
  const [manufacturer, setManifacturer] = useState('');
  const handleSearch = () => {}
  
  return (
    <form className='searchbar'
    onSubmit={handleSearch}
    ><div className='searchbar__item'>
      <SearchManufacturer
      manufacturer = {manufacturer}
      setManufacturer = {setManifacturer}
      /> 

    </div>

    </form>
  )
}

export default SearchBar