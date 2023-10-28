import React, { useState, useEffect } from "react";
import Transaction from "./Transaction";
import './App.css';

function Table({ data }) {
  const [deletedItems, setDeletedItems] = useState([]);

  useEffect(() => {
    setDeletedItems(data);
  }, [data]);

  function handleDelete(itemId) {
    const newarray = deletedItems.filter((item) => item.id !== itemId);
    setDeletedItems(newarray);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {deletedItems.map((item, index) => (
          <Transaction
            key={index}
            individualTrans={item}
            date={item.date}
            description={item.description}
            category={item.category}
            amount={item.amount}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
