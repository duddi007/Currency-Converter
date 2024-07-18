import { useState } from 'react'
import { useCurrencyInfo } from "./hooks/useCurrencyInfo.jsx";
import InputBox from './Components/InputBox.jsx';

function App() {
  const [amount, setAmount] = useState('')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromCurrency, setFromCurrency] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState('')

  function handleSwap() {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertedAmount)
    setConvertedAmount('')
  }

  const { currencies, convertCurrency } = useCurrencyInfo()

  const handleConversion = async () => {
    const result = await convertCurrency(amount, fromCurrency, toCurrency)
    if (result) {
      setConvertedAmount(result)
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Currency Converter</h1>
        <div className="space-y-4">
          <InputBox
            label="From"
            amount={amount}
            setAmount={setAmount}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            currencies={currencies}
            readOnly={false}
          />
          <div className="flex justify-center">
            <button 
              onClick={handleSwap}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            setAmount={setConvertedAmount}
            currency={toCurrency}
            setCurrency={setToCurrency}
            currencies={currencies}
            readOnly={true}
          />
        </div>
        <button 
          onClick={handleConversion}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Convert
        </button>
        {convertedAmount && (
          <div className="mt-4 text-center text-blue-600 font-semibold">
            Converted Amount: {convertedAmount}
          </div>
        )}
      </div>
    </div>
  )
}

export default App