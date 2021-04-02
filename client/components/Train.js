import React from 'react'

const Train =(props)=>{
  const train = props.train
  const name = train.name
  const deleteTrain = props.deleteTrain
  return(
    <div>
      <h2>Train name: {name}</h2>
      <h4>Schedule:</h4>
      <h5>First arrival: {train.arrivalTime1}</h5>
      <h5>Second arrival: {train.arrivalTime2}</h5>
      <img src={train.imageUrl}/>
      <div className= "column">
          {
          <button type="button" id= "remove" onClick={() => deleteTrain(train)}> Delete</button>
        }
      </div>
    </div>
  )
}
export default Train
