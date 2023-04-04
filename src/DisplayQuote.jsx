import React from 'react'

const DisplayQuote = ({quote}) => {
  return (
    <div className='quote'>
        <h1>"{quote?.content}"</h1>
        <h3>-{quote?.author}</h3>
    </div>
  )
}

export default DisplayQuote