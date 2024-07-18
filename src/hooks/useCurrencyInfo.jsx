
import { useEffect } from 'react'
import { useState } from 'react'

export function useCurrencyInfo() {
    const [currencies, setCurrency] = useState([])
    useEffect(() => {
        fetchCurrency()
    }, [])

    const fetchCurrency = async () => {

        try {
            const response = await fetch("https://api.frankfurter.app/currencies")
            const data = await response.json()
            setCurrency(Object.keys(data))





        } catch (error) {
            console.error("error", error)
        }
    }


    const convertCurrency = async (amount , fromCurrency , toCurrency) => {
        try {
            const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
            const data = await response.json()
            // return data.rates[toCurrency] + " " + toCurrency
            console.log("API response:", data)
            console.log("Converted amount:", data.rates[toCurrency])
            return data.rates[toCurrency]
        } catch (error) {
            console.error("error", error)
        }
    }

    return (
        { currencies, convertCurrency }
    )
}



