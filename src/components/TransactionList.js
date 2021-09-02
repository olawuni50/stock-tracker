import React from 'react'
import TransactionCard from './TransactionCard'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TransactionList = ({transactions, onDelete, findItem}) => {

    const renderTransactions = transactions.map((transaction) =>{
        return(
            <TransactionCard transaction={transaction} onDelete={onDelete} findItem={findItem} key={transaction.id}/>
        )
    })
    return (
      
            <div>
            <h2>History</h2>  
            <Table>
                <Thead>
                    <Tr>
            <div className="list">
           <Th>Date Added</Th>
            <Th>Goods</Th>
            <Th>Qty</Th>
            <Th>Amnt</Th>
            <Th>T.Amnt</Th>
            <Th>Qty Sold</Th>
            <Th>Qty.Remain</Th>
       
            <Th>Amnt.Sold</Th>
            <Th>R.Amount</Th>
            
            </div>
            </Tr>
            </Thead>
    
                 <Tbody>
                     <Tr>
                         <div className="transaction-card">
         {renderTransactions.length > 0 ? renderTransactions : <span style={{marginLeft:"0.5rem"}}>No Transaction</span>}
         </div>
            </Tr>
            </Tbody>
            </Table>


            </div>
      
    )
}

export default TransactionList
