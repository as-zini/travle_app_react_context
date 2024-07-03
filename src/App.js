import logo from './logo.svg';
import './App.css';
import SummaryPage from './pages/SummaryPage';
import OrderPage from './pages/OrderPage';
import { useState } from 'react';
import CompletePage from './pages/CompletePage';

function App() {
  const [step, setStep] = useState(0);
  return (
    <div style={{padding: '4rem'}}>
      {step === 0 && <OrderPage setStep={setStep}></OrderPage>}
      {step === 1 && <SummaryPage setStep={setStep}></SummaryPage>}
      {step === 2 && <CompletePage setStep={setStep}></CompletePage>}
    </div>
  );
}

export default App;
