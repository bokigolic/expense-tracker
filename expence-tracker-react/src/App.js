import React from 'react';
import { Header } from './components/Header';
import {Balance} from './components/Balance';
import './App.css';
import { IncomeExpences } from './components/IncomeExpences';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';




function App() {
  return (
<div>
  <Header />
  <div className='container'>
    <Balance />
    <IncomeExpences />
    <TransactionList />
    <AddTransaction />

  </div>
</div>
      
   
  );
}

export default App;
