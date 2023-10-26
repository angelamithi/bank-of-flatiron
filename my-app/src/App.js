import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import Form from './Form';
import Table from './Table';
import Transaction from './Transaction';


function App() {
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/transactions")
    .then((resp)=>resp.json())
    .then(transaction=>{
     setData(transaction);
     console.log(transaction)
    })
},[]);
// const newArray=data.map((item)=>(
//   <Table date={item.date} description={item.description} category={item.description} amount={item.amount}/>
// ))
  return (
    <div className="App">
       
       <header className="App-header">
       <Header/>
        <Search />
        <Form/>
        <Table data={data} />
       
        
      </header>
    </div>
  );
}

export default App;
