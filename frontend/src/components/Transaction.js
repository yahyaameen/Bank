import React from 'react';
import './transaction.css'
import bankConsts from '../utils/constants';
import axios from 'axios';

const Transaction = ({transaction,updateTransactions}) => {

    const deleteTransaction = async (operation) =>{
       await axios.delete(`http://localhost:${bankConsts.SERVER_PORT}/bank/transaction/${transaction._id}`)
       updateTransactions(transaction)
    }

    return (
        <div id='transaction'>
            <span className='vendor'>{transaction.vendor}</span>
            <span className={`${transaction.amount < 0 ? "withdraw" : "deposit"}`}>{transaction.amount}</span><br/>
            <span className='category'>{transaction.category}</span>
            <button className={`${transaction.amount < 0 ? "delete-withdraw" : "delete-deposit"}`} onClick={deleteTransaction}>Delete</button>
        </div>
    )   
}

export default Transaction