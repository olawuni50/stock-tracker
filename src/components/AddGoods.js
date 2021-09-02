import React, {useDebugValue, useState} from 'react'

const AddGoods = ({onAdd, checked, value}) => {
    const [goods, setGoods]= useState("")
    const [amount, setAmount] = useState("")
    const [quantities, setQuantites] = useState("");
    const [qtySold, setQtySold] = useState("");
    const [currency, setCurrency] = useState("");

    

    const submit = (e) =>{
        e.preventDefault()

        onAdd({goods, amount, quantities, qtySold, currency});

    
        setGoods("");
        setAmount("");
        setQuantites("");
        setQtySold("");
        setCurrency("");

    }

    
    
    return (
        <div>
            <form className="form" onSubmit={submit}>
                <h2>Add Transactions</h2>
                <div className="form-control">
                    <label>Goods</label>
                    <input type="text" placeholder="Enter goods"
                    value={goods} onChange={(e)=>setGoods(e.target.value)} required/>
                </div>

                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" placeholder="Enter amount"
                    value={amount} onChange={(e) =>setAmount(e.target.value)} required/>
                </div>

                <div className="form-control">
                    <label>Quantities Bought</label>
                    <input type="number" placeholder="Enter Quantities"
                    value={quantities} onChange={(e) =>setQuantites(e.target.value)} required/>
                </div>

                <div className="form-control">
                    <label>Quantity Sold (Optional)</label>
                    <input type="number" placeholder="Enter Quantities Sold"
                    value={qtySold} onChange={(e) =>setQtySold(e.target.value)} />
                </div>

                {/* <h3>Choose Currency</h3>

                <div className="form-radio">
                    <label>
                <input type="radio" name="currency" id="naira"
                    value="naira" onChange={(e) =>setCurrency(e.target.value)} />
                    NGN</label>                   
                </div>

                <div className="form-radio">
                    <label>
                <input type="radio" name="currency"  id="dollar"
                    value="dollar" onChange={(e) =>setCurrency(e.target.value)}/>
                
                    Dollar($)</label>
                    </div> */}
                    
                    <button className="add-btn">Add</button>
            </form>
            
        </div>
    )
}

export default AddGoods
