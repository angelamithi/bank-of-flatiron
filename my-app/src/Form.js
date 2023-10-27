import React, { useState } from "react";
import './App.css';

function Form({onSubmit}){
    const [formData,setFormData]=useState({
    date:"",
    description:"",
    category:"",
    amount:"",

    });

    function handleChange(e){
        setFormData({
           ...formData,
           [e.target.id]:e.target.value,
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3000/transactions",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formData),
            
        })
        .then((resp)=>resp.json())
        .then((newTransaction)=>{
            onSubmit(newTransaction);
        })
        
       
        
        setFormData({
            date:"",
            description:"",
            category:"",
            amount:"",

        })
        
    }
    
    return (
        <div>
            <form className="Form" onSubmit={handleSubmit}>
            <label>
                Date:  <input  type="date" id="date" placeholder="Date" value={formData.date} onChange={handleChange}/>
            </label>
             
           
            <input type="text" id="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
            <input  type="text" id="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
            <input  type="text" id="amount" placeholder ="Amount" value={formData.amount} onChange={handleChange}/>
            <div>
            <button type="submit" id="button">Add Transaction</button>
           
            </div>
            </form>

        </div>
    )
}
export default Form;