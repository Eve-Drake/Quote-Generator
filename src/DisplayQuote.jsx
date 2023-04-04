import React from 'react'

const DisplayQuote = ({quote}) => {
  return (
    <>
        <h1>"{quote.content}"</h1>
        <h3>--{quote.author}</h3>
    </>
  )
}

export default DisplayQuote