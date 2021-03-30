import React from 'react'

const Train =(props)=>{
  const train = props.train
  const name = train.name
  return(
    <div>
      <h2>Train name: {name}</h2>
    </div>
  )
}
export default Train
