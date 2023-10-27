import React, { useState } from "react";
import Transaction from "./Transaction";


function Search({setSearch}){
  

  function handleChange(e){
   setSearch(e.target.value);
  }

    return(
        <div>
        <input type="text" id="search" placeholder="search" onChange={handleChange}/>
              
        </div>
    )
}
export default  Search;