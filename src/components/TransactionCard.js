import React from 'react'
import {Link} from "react-router-dom"
import { Td, Tr, Tbody } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TransactionCard = ({transaction, onDelete, findItem}) => {
  
    const totalAmount = transaction.amount * transaction.quantities
    const qtyRemaining = transaction.quantities - transaction.qtySold
    const amountSold = transaction.qtySold * transaction.amount
    const remainAmount = totalAmount - amountSold

    var today = new Date();
    var dd=String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy
    return (
        <div>
            <Tbody>

                <Tr>
                   
            <Td> {today}</Td>
           <Td>{transaction.goods}</Td>
           <Td>{transaction.quantities}</Td>
            <Td>${transaction.amount}</Td>
            <Td>${totalAmount}</Td>
            <Td>{transaction.qtySold > 0 ? transaction.qtySold : "None"}</Td>
            {/* <Td>{quantRemaining}</Td> */}
            <Td className={qtyRemaining > 0 ? "green":"red"}>{qtyRemaining > 0 ? qtyRemaining : "Sold Out"} </Td>
            <Td>${amountSold > totalAmount ? <span style={{color:"red"}}>Not available</span> : amountSold}</Td>
            <Td>${remainAmount}</Td>
            

           <Td><button className="delete-btn" onClick={() =>window.confirm("Are you sure you want to delete?")
            && onDelete(transaction.id)}>Del</button></Td>

            <Td><Link to="/edit">
            <button className="edit-btn" onClick={() =>findItem(transaction.id)}>Edit</button>
            </Link></Td>
            
            </Tr>
          
            </Tbody>
            
            
        </div>
    )
}

export default TransactionCard
