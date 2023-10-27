import React, { useState } from "react";
import './App.css';


function Search({setSearch}){
  

  function handleChange(e){
   setSearch(e.target.value);
  }

    return(
        <div className="Search">
        <input type="text" id="search" placeholder="Search your Recent Transactions" onChange={handleChange}/>
              
        </div>
    )
}
export default  Search;