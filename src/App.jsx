import { useState, useEffect } from "react"

function ChartBar() {
  return (
    <div className="">
      <div className="w-10 h-64 bg-soft-red rounded-md"></div>
      <p className="mt-4 text-sm text-center text-mid-brown leading-none">label</p>
    </div>
  )
}

function App() {
  // first mount
  useEffect(() => {
    async function fetchData() {
      try {
        console.log("we are ready to go......")
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
        <h2 className="text-lg font-bold text-dark-brown">Spending - Last 7 days</h2>
        <div className="mt-4 flex justify-between">
          <ChartBar />
          <ChartBar />
          <ChartBar />
          <ChartBar />
          <ChartBar />
          <ChartBar />
          <ChartBar />
        </div>
      </div>
    </main>
  )
}

export default App
