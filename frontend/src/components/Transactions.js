import React from 'react';
import { useState, useEffect } from 'react'
import Transaction from './Transaction';
import './transactions.css'
import bankConsts from '../utils/constants';
import axios from 'axios';

const Transactions = () => {
  let [transactions, setTransactions] = useState([])

  const updateTransactions = (transaction) => {
    let newTransactions = [...transactions]
    const updatedTransactions = newTransactions.filter(t => t._id !== transaction._id)
    setTransactions(updatedTransactions);
  }

  useEffect(()=>{
     async function fetchTransactions () {
      const response = await axios.get(`http://localhost:${bankConsts.SERVER_PORT}/bank/transactions`)
      const transactionsData = response.data
      setTransactions(transactionsData)
    }
    fetchTransactions()
  }, [])

  return (
     <div className="transactions-container">
       <div id='transactions'>
        { transactions.map((t, index) => 
              <Transaction key={index} transaction={t} updateTransactions={updateTransactions}/>
          ) 
        }
       </div>
     </div>
  )   
}

export default Transactions