import React, { useState } from "react";
import Button from "./Button";
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
            <form onSubmit={handleSubmit}>
            <input  type="date" id="date" placeholder="Date" value={formData.date} onChange={handleChange} />
            <input type="text" id="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
            <input  type="text" id="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
            <input  type="text" id="amount" placeholder ="Amount" value={formData.amount} onChange={handleChange}/>
            <button type="submit">Add Transaction</button>
            </form>

        </div>
    )
}
export default Form;