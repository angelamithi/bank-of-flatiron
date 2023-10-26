import React, { useState } from "react";
import Button from "./Button";
function Form({}){
    const [formData,setFormData]=useState({
    date:"",
    description:"",
    category:"",
    amount:"",

    });
    return (
        <div>
            <form>
            <input  type="date" id="date" placeholder="Date" value={formData.date} />
            <input type="text" id="description" placeholder="Description" value={formData.description}/>
            <input  type="text" id="category" placehoceholder="Category" value={formData.category}/>
            <input  type="text" id="amount" placeholder ="Amount" value={formData.amount}/>
            <Button/>
            </form>

        </div>
    )
}
export default Form;