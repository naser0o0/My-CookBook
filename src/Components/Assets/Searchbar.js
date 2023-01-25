/** @format */

import React, { useState } from "react";
import InputFeld from "../Assets/InputFeld";
import Button from "../Assets/Button";
import "../Layouting/Navbar/index.css";

export default function Searchbar({ setSearchValue, setCurrentPage }) {
  const [searchInputText, setsearchInputText] = useState();

  function handelChange(e) {
    setsearchInputText(e.target.value);
  }
  function runSearch() {
    console.log("searchTerm", searchInputText);
    if (!searchInputText) {
      alert("SuchFeld ist leer!!!");
    } else {
      const search = `query=${searchInputText}`;
      setSearchValue(search);
      setsearchInputText("");
      setCurrentPage(0);
    }
    console.log("searchInputText", searchInputText);
  }

  return (
    <div className='searchBarContainer'>
      <InputFeld
        className='searchInputFeld'
        type='text'
        name='search'
        onChange={handelChange}
        placeholder='Rezept suchen'
      ></InputFeld>
      <Button
        className='searchButton'
        onClick={runSearch}
        text='Suchen'
      ></Button>
    </div>
  );
}
