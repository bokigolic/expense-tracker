import React from 'react';
import { Header } from './components/Header';
import {Balance} from './components/Balance';
import './App.css';
import { IncomeExpences } from './components/IncomeExpences';



function App() {
  return (
<div>
  <Header />
  <div className='container'>
    <Balance />
    <IncomeExpences />

  </div>
</div>
      
   
  );
}

export default App;