import { useState } from 'react'
import './index.css'
import DisplayQuote from './DisplayQuote'
import GetQuote from './GetQuote'

function App() {
  const [quote, setQuote] = useState()

  return (
    <>
      <DisplayQuote quote={quote}/>
      <GetQuote setQuote={setQuote}/>
    </>
  )
}

export default App
