import { useState, useEffect, useReducer } from "react"

// context
import AppState from "./AppState"
import AppDispatch from "./AppDispatch"

// components
import Chart from "./components/Chart"

function App() {
  // locat state
  const initialState = {
    balance: 921.48,
    days: 7, // number of days selected on filter
    expenses: [],
    monthlyExpenses: 478.33
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-expenses":
        return { ...draft, expenses: action.value }
        break
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  // first mount
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json")
        const data = await response.json()
        dispatch({ type: "set-expenses", value: data })
        // setState(prev => ({ ...prev, expenses: data }))
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
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        <main className="m-auto w-full max-w-lg font-dm-sans">
          <div className="p-6 rounded-lg bg-soft-red flex items-center">
            <div className="flex-1 text-cream">
              <h2 className="text-base leading-none">My balance</h2>
              <p className="mt-2 text-2xl font-bold leading-none">${state.balance}</p>
            </div>
            <img src="/logo.svg" alt="Application logo" />
          </div>
          <div className="p-6 mt-4 bg-pale-orange rounded-lg">
            <h1 className="text-2xl font-bold text-dark-brown leading-none">Spending - Last {state.expenses.length} days</h1>
            <Chart />
            <footer className="pt-6 mt-7 border-t-[3px] border-cream text-mid-brown">
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
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}

export default App
