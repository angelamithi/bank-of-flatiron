import React from "react";
import Transaction from "./Transaction";
function Table({data}){
    return(
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item,index)=>(
                        <Transaction key={index} date={item.date} description={item.description} category={item.category} amount={item.amount}/>
                    ))}
                        </tbody>
                
                    </table>
       
    )
}
export default Table;