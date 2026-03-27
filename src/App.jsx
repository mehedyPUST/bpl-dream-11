import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players'
const fetchPlayer = async () => {
  const res = await fetch('/data.json')
  return res.json();
}
function App() {
  const playersPromise = fetchPlayer();

  return (
    <>

      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>

    </>
  )
}

export default App
