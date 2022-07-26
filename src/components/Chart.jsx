import { useEffect, useContext } from "react"

// context
import AppState from "../AppState"

// chart bar component
function ChartBar(props) {
  return (
    <div className="flex-1">
      <div className="flex h-64 flex-col justify-end">
        <div style={{ height: `${(props.expense.amount / props.total) * 100}%` }} className={`relative rounded-md ${props.unique ? "bg-cyan" : "bg-soft-red"} cursor-pointer group`}>
          <div className="absolute top-0 -left-[10%] -translate-y-[130%] w-auto px-3 py-2 bg-dark-brown rounded-md font-bold text-xs text-center text-cream hidden group-hover:block">${props.expense.amount}</div>
        </div>
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
