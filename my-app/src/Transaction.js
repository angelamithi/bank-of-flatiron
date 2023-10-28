import React from "react";
import './App.css';

function Transaction({ individualTrans, date, description, category, amount , onDelete}) {
  function handleClick(){
  onDelete(individualTrans.id)

  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td id="amount">{amount}
      <button id ="click-button" onClick={handleClick}>X</button>
      </td>
      
    </tr>
  );
}

export default Transaction;