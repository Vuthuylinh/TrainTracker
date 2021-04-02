import React from 'react'

const Train =(props)=>{
  const train = props.train
  const name = train.name
  const deleteTrain = props.deleteTrain
  const converseOutputTime =(time)=>{
    let hour = parseInt(time.slice(0,2))
    if(hour<12){
      return time + " AM"
    }

    if(hour ===12){
      return time + " PM"
    }
    if(hour>12){
      let newHour = hour-12
      let minutes = time.slice(2)
      return newHour+minutes + " PM"
    }
  }
  const time1 =converseOutputTime(train.arrivalTime1)
  const time2 =converseOutputTime(train.arrivalTime2)
  return(
    <div className='train'>
      <div>
        <div>
          <h3>Train name: {name}</h3>
        </div>
        <div>
          <h4>Schedule:</h4>
          <div>
            <h5>First arrival: {time1}</h5>
            <h5>Second arrival: {time2}</h5>
          </div>
        </div>
      </div>
      <div>
        <img src={train.imageUrl}/>
        <div className= "column">
            {
            <button type="button" id= "remove" onClick={() => deleteTrain(train)}> Delete</button>
          }
        </div>
      </div>

    </div>
  )
}
export default Train
