import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Breakdown from './components/Breakdown';
import { useState } from 'react'
import NavBar from './components/NavBar';
import bankConsts from './utils/constants';


function App() {
  let [balance, setBalance] = useState(bankConsts.BALANCE)

  const updateBalance = (amount,operation) => {
    operation === "deposit" ? setBalance(balance + parseInt(amount)) : setBalance(balance - parseInt(amount))
  }

  return (
    <Router>
      <div className="App">
        <NavBar balance={balance}/>
        <Routes>
          <Route path='/' element={<Transactions />}></Route>
          <Route path='/Operations' element={<Operations updateBalance={updateBalance} />}></Route>
          <Route path='/Breakdown' element={<Breakdown />}></Route>
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
