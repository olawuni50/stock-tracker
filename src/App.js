import {useState, useEffect} from "react"
import './App.css';
import AddGoods from "./components/AddGoods";
import EditTransaction from "./components/EditTransaction";
import Header from "./components/Header";
// import MyTable from "./components/MyTable";
import Results from "./components/Results";
import TransactionList from "./components/TransactionList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Calculator from "./components/Calculator";
import Home from "./components/Home";

function App() {
  const LOCAL_STORAGE_KEY = "transactions"

  const [showCalculator, setShowCalculator] = useState(false)
  const [transactions, setTransactions] =useState([])
  const [editItem, setEditItem] = useState(null)

  // Add transactions
  const addTransaction = (transaction) =>{
    const id = Math.floor(Math.random() * 1000) + 1
    setTransactions([...transactions, {id: id, ...transaction}])
  }


  // Delete Transactiions

  const deleteTransaction = (id)=>{
    const newTransaction = transactions.filter((transaction)=>{
     return transaction.id !==id
    })
    setTransactions(newTransaction)
  }  


// Find Transaction (Edit)
  const findItem = (id) =>{
    const item = transactions.find(transaction => transaction.id ===id)
    setEditItem(item)
  }

  // Edit Transaction
  const editTransaction = (goods, amount, quantities, qtySold, id)=>{
    const newTransaction = transactions.map(transaction => (transaction.id === id ? {goods, amount, quantities, qtySold, id} : transaction)) 
    setTransactions(newTransaction)
  }

  // Storing in local storage
  useEffect(()=>{
  const retrieveTransaction =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retrieveTransaction) setTransactions(retrieveTransaction)

  }, [])


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(transactions))

  }, [transactions])

  return (
    <div className="container">
      <Router> 
         
      <Header/>
      <Results transactions={transactions} onAdd={() =>setShowCalculator(!showCalculator)}
      showCal={showCalculator}/>

      {showCalculator && <Calculator/>}

      <AddGoods exact path="/add" onAdd={addTransaction}/>

      <TransactionList transactions={transactions} onDelete={deleteTransaction} findItem={findItem}/>

      <Route path="/edit" render={(props) =>(<EditTransaction {...props} onAdd={addTransaction} editItem={editItem} editTransaction={editTransaction}/>)}/>

            {/* <MyTable/> */}
        
      </Router>
      
      

    </div>
    
  );
}

export default App;
