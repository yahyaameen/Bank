import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

const NavBar = ({balance}) => {
    return (
        <div id='nav-bar'>
            <div className='links'>
                <Link to="/"><h1>Transactions</h1></Link>
                <Link to="/Operations"><h1>Operations</h1></Link>
                <Link to="/Breakdown"><h1>Breakdown</h1></Link>
            </div>
            <h2 className='balance'>BALANCE: {balance > 500 ? <span style={{color: 'green'}}>{balance}</span>:<span style={{color: 'red'}}>{balance}</span>}</h2>
        </div>
    )   
}

export default NavBar