import { useState, useEffect } from "react"

// components
import Chart from "./components/Chart"

function App() {
  // locat state
  const [state, setState] = useState({
    balance: 921.48,
    expenses: [],
    monthlyExpenses: 478.33
  })

  // first mount
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json")
        const data = await response.json()
        setState(prev => ({ ...prev, expenses: data }))
      } catch(e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  if (!state.expenses.length) return (
    <div className="w-full flex">
      <div className="m-auto w-10 h-10 rounded-full border-2 border-transparent border-y-soft-red animate-spin"></div>
    </div>
  )

  return (
    <main className="m-auto w-full max-w-md font-dm-sans">
      <div className="p-6 rounded-lg bg-soft-red text-red-400 flex items-center text-white">
        <div className="flex-1">
          <h2>My balance</h2>
          <p>${state.balance}</p>
        </div>
        <img src="/logo.svg" alt="Application logo" />
      </div>
      <div className="p-6 mt-4 bg-pale-orange rounded-lg">
        <h2 className="text-2xl font-bold text-dark-brown leading-none">Spending - Last {state.expenses.length} days</h2>
        <Chart expenses={state.expenses} />
        <footer className="pt-6 mt-7 border-t-4 border-cream text-mid-brown">
          <h2 className="text-base leading-none">Total this month</h2>
          <div className="flex items-center mt-2">
            <h3 className="flex-1 text-3xl font-bold text-dark-brown leading-none">${state.monthlyExpenses}</h3>
            <div>
              <p className="font-bold text-right text-dark-brown leading-none">+2.4%</p>
              <p className="mt-1 leading-none">from last month</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
