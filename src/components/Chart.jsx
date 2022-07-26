// chart bar component
function ChartBar(props) {
  return (
    <div className="flex-1">
      <div className="h-64 rotate-180">
        <div style={{ height: `${(props.expense.amount / (478.33 / 7)) * 100}%` }} className={`rounded-md ${props.unique ? "bg-cyan" : "bg-soft-red"}`}></div>
      </div>
      <p className="mt-4 text-sm text-center text-mid-brown leading-none">{props.expense.day}</p>
    </div>
  )
}

function Chart({ expenses }) {
  return (
    <div className="flex gap-3">
      {expenses.map(expense => <ChartBar key={expense.day} expense={expense} unique={expense.day == "wed"} />)}
    </div>
  )
}

export default Chart
