import React from 'react'

function InputBox({
  label,
  amount,
  setAmount,
  currency,
  setCurrency,
  currencies,
  readOnly
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <label htmlFor="input" className="text-sm font-medium text-gray-700 mb-2 block">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          readOnly={readOnly}
          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="focus:ring-blue-500 focus:border-blue-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            {currencies && currencies.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default InputBox