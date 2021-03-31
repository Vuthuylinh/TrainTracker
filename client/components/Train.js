import React from 'react'

const Train =(props)=>{
  const train = props.train
  const name = train.name
  return(
    <div>
      <h2>Train name: {name}</h2>
      <h4>Schedule:</h4>
      <h5>arrivalTime1: {train.arrivalTime1}</h5>
      <h5>arrivalTime2: {train.arrivalTime2}</h5>
      <img src={train.imageUrl}/>

    </div>
  )
}
export default Train
