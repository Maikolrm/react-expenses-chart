import { useState, useEffect } from "react"

// components
import Chart from "./components/Chart"

function App() {
  // locat state
  const [data, setData] = useState([])

  // first mount
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json")
        const data = await response.json()
        setData(data)
      } catch(e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="m-auto w-full max-w-md">
      <div className="p-6 rounded-lg bg-soft-red text-red-400 flex items-center text-white">
        <div className="flex-1">
          <h2>My balance</h2>
          <p>$921.48</p>
        </div>
        <div>Logo</div>
      </div>
      <div className="p-6 mt-4 bg-pale-orange rounded-lg">
        <h2 className="text-lg font-bold text-dark-brown leading-none">Spending - Last 7 days</h2>
        <Chart data={data} />
      </div>
    </main>
  )
}

export default App
