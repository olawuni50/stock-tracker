import React from 'react'


const Results = ({transactions, onAdd, showCal}) => {
    const myResult = transactions.map((transaction) => transaction.amount * transaction.quantities);
    const results = myResult.reduce((acc, item)=> (acc +=item), 0).toFixed(2)

    const goodSold = transactions.map((transaction) => transaction.qtySold * transaction.amount)
    const amntSold = goodSold.reduce((acc, item) => (acc +=item), 0).toFixed(2)

    const remainAmount = results - amntSold
   
    
    return (
        <div className="my-result">
            <div className="results">
           
            <div>
            <h4>Total Goods</h4>
            <h2>${results}</h2>
            </div>
            
            <div>
            <h4>Goods Sold</h4>
            <h2>${amntSold}</h2>
            </div>
      

            <div>
            <h4>Balance</h4>
            <h2>${remainAmount}</h2>
            </div>
            </div>
            <button className={showCal ? "calc-btn-red":"calc-btn"} onClick={onAdd}> {showCal ? "Close Calculator": "Open Calculator"}</button>
        

                        
        </div>
    )
}

export default Results
