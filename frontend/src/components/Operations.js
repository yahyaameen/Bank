import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import "./operations.css"
import bankConsts from '../utils/constants';
import axios from 'axios';

const Operations = ({updateBalance}) => {
    let [transactionAmount, setTransactionAmount] = useState("")
    let [transactionVendor, setTransactionVendor] = useState("")
    let [transactionCategory, setTransactionCategory] = useState("")
    
    const updateTransactionAmountText = (event) => {
        setTransactionAmount(event.target.value)
    }

    const updateTransactionVendorText = (event) => {
        setTransactionVendor(event.target.value)
    }

    const updateTransactionCategoryText = (event) => {
        setTransactionCategory(event.target.value)
    }
    
    const makeOperation = async (operation) =>{
        const amount = operation === "deposit" ? parseInt(transactionAmount) : - parseInt(transactionAmount) 
        const transactionData = {
            amount: amount,
            category: transactionCategory,
            vendor: transactionVendor
        }
        try{
            const response =  await axios.post(`http://localhost:${bankConsts.SERVER_PORT}/bank/transaction`, transactionData)
            updateBalance(transactionAmount,operation)
        }
        catch (err){
                console.log(err);
        }
       
    }

    return (
        <div id="operations-container">
            <form>
                <h4 className="title">Insert Transactions</h4>
                <input type = "text" placeholder = 'Transaction amount' value = { transactionAmount } onChange = { updateTransactionAmountText }/><br/>
                <input type = "text" placeholder = 'Transaction vendor' value = { transactionVendor } onChange = { updateTransactionVendorText }/><br/>
                <input type = "text" placeholder = 'Transaction category' value = { transactionCategory } onChange = { updateTransactionCategoryText }/><br/>
                <Link to="/"><button onClick={() => makeOperation("deposit")}>Deposit</button></Link>
                <Link to="/"><button onClick={() => makeOperation("withdraw")}>Withdraw</button></Link>
            </form> 
        </div>
    )
}

export default Operations
