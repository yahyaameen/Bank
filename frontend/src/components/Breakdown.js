import React from 'react';
import { useState, useEffect } from 'react'
import "./breakdown.css"
import bankConsts from '../utils/constants';
import axios from 'axios';

const Breakdown = () => {
    let [transactionsSumPerCategory, setTransactionsSumPerCategory] = useState([])

    useEffect(()=>{
      async function fetchBreakdown () {
        const response = await axios.get(`http://localhost:${bankConsts.SERVER_PORT}/bank/transactions?breakdown=true`)
        const transactionsData = response.data
        setTransactionsSumPerCategory(transactionsData)
      }
      fetchBreakdown()
      }, [])
      
    return (
        <div className="breakdown-container">
          <div id="breakdown">
            <h1 className="title">BreakDown</h1>
            { transactionsSumPerCategory.map((c, index) =>
                <div className="category" key={index}>{c._id} : <span className={`${c.amount > 0 ? "category-plus" : "category-minus"}`}>{c.amount}</span></div> 
              ) 
            }
          </div>
        </div>
     )   
}

export default Breakdown