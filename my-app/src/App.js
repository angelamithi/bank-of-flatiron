import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Form from './Form';
import Table from './Table';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((resp) => resp.json())
      .then((transactions) => {
        setData(transactions);
      });
  }, []);

  function addTransaction(newTransaction) {
    setData([...data, newTransaction]);
  }

  const filteredTasks = data.filter((trans) =>
    trans.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Search data={data} setSearch={setSearch} />
        <Form onSubmit={addTransaction} />
        <Table data={search.length > 0 ? filteredTasks : data} />
      </header>
    </div>
  );
}

export default App;
