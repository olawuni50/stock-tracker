import React ,{useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"

const EditTransaction = ({onAdd, editItem, editTransaction}) => {
    const [goods, setGoods]= useState("")
    const [amount, setAmount] = useState("")
    const [quantities, setQuantites] = useState("");
    const [qtySold, setQtySold] = useState("");

    const history = useHistory();

    

    const submit = (e) =>{
        e.preventDefault()
        if(editItem ===null){
            onAdd({goods, amount, quantities, qtySold});    
        setGoods("")
        setAmount("")
        setQuantites("")
        setQtySold("")
    

        }  else{
            editTransaction(goods, amount, quantities, qtySold, editItem.id)
            history.push("/")
        }     

    }
 
    useEffect (() =>{
        if(editItem !==null){
            setGoods(editItem.goods) 
            setAmount(editItem.amount);
            setQuantites(editItem.quantities);
            setQtySold(editItem.qtySold);
            console.log(editItem)
        }else{
            setGoods("")
            setAmount("")
            setQuantites("")
            setQtySold("")    
            
        }

    }, [editItem])

    return (
        <div>
            <form className="form" onSubmit={submit}>
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
                    <input type="number" placeholder="Enter Quantities"
                    value={qtySold} onChange={(e) =>setQtySold(e.target.value)} />
                </div>

                <button className="add-btn">Update</button>
            </form>
            
        </div>
    )
}

export default EditTransaction
