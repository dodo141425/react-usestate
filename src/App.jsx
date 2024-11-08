import React, { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(10000);
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);

  const handleWithdraw = () => {
    if (amount > 0 && amount <= balance) {
      const newBalance = balance - amount;
      setBalance(newBalance);
      
      setHistory([
        ...history,
        { amount, date: new Date().toLocaleString() }
      ]);
    } else if (amount > balance) {
      setMessage
    }

    setAmount(0);
  };

  const handleQuickWithdraw = (withdrawAmount) => {
    setAmount(prevAmount => prevAmount + withdrawAmount);
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 p-44">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800">โปรแกรมถอนเงิน</h1>
        <p className="text-gray-600 mt-4">ยอดเงินคงเหลือ {balance} บาท</p>
        
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button onClick={() => handleQuickWithdraw(100)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            ถอน 100 บาท
          </button>
          <button onClick={() => handleQuickWithdraw(500)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            ถอน 500 บาท
          </button>
          <button onClick={() => handleQuickWithdraw(1000)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            ถอน 1000 บาท
          </button>
          <button onClick={() => handleQuickWithdraw(5000)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            ถอน 5000 บาท
          </button>
        </div>

        <p className="mt-4">จำนวนที่ต้องการถอน</p>
        <div className="mt-2 flex">
          <input
            placeholder="กรอกจำนวนเงินที่ต้องการถอน"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="flex-grow p-2 border border-gray-300 rounded-l-md rounded-r-md focus:outline-none focus:ring focus:ring-green-200"
          />

        </div>
        <button onClick={handleWithdraw} className="bg-green-500 text-white px-4 py-2 rounded-r-md rounded-l-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">ถอนเงิน</button>

        {message && <p className="text-gray-700 font-medium mt-4">{message}</p>}
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ml-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">ประวัติการถอนเงิน</h2>
        {history.length > 0 ? (
          <ul className="space-y-2">
            {history.map((entry, index) => (
              <li key={index} className="flex justify-between p-2 bg-gray-50 rounded-md border border-gray-200">
                <span>จำนวน {entry.amount} บาท</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">ยังไม่มีประวัติการถอนเงิน</p>
        )}
      </div>
    </div>
  );
}

export default App;
