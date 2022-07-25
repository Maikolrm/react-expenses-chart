// chart bar component
function ChartBar(props) {
  return (
    <div className="flex-1">
      <div className="h-64 bg-soft-red rounded-md"></div>
      <p className="mt-4 text-sm text-center text-mid-brown leading-none">label</p>
    </div>
  )
}

function Chart({ expenses }) {
  return (
    <div className="mt-4 flex gap-3">
      {expenses.map(expense => <ChartBar key={expense.day} />)}
    </div>
  )
}

export default Chart
