import { useEffect, useContext } from "react"

// context
import AppState from "../AppState"

// chart bar component
function ChartBar(props) {
  return (
    <div className="flex-1">
      <div className="h-64 rotate-180">
        <div style={{ height: `${(props.expense.amount / props.total) * 100}%` }} className={`rounded-md ${props.unique ? "bg-cyan" : "bg-soft-red"}`}></div>
      </div>
      <p className="mt-4 text-sm text-center text-mid-brown leading-none">{props.expense.day}</p>
    </div>
  )
}

// caculate expenses total
function calculateTotal(expenses) {
  let total = 0
  expenses.map(expense => total += expense.amount)
  return total
}

function Chart() {
  // app state
  const { expenses } = useContext(AppState)

  return (
    <div className="flex gap-3">
      {expenses.map(expense => <ChartBar key={expense.day} expense={expense} unique={expense.day == "wed"} total={calculateTotal(expenses)} />)}
    </div>
  )
}

export default Chart
