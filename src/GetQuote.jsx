import React, { useEffect } from 'react'

const GetQuote = ({setQuote}) => {
  
    useEffect(() =>{
        getQuote()
    },[])
    
    const getQuote =()=>{
        try{
            fetch('https://api.quotable.io/random?')
            .then(data => data.json())
            .then((data) =>{
                setQuote(data)
            })
        }
        catch(err){
            console.error(err)
        }
    }

  
  return (
    <button onClick={getQuote}>Generate New Quote</button>
  )
}

export default GetQuote