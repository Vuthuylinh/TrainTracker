import React from 'react'
import {connect} from 'react-redux'
import {fetchTrainsThunk,removeTrainThunk} from '../store/trains'
import Train from './Train'
import CreateTrainSchedule from './CreateTrainSchedule'

export class Trains extends React.Component{
  constructor(){
    super()
    this.state = {
      clicked: false,
      time:''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.findMatchArrivalTime = this.findMatchArrivalTime.bind(this)
  }
componentDidMount(){
  try {
    this.props.getAllTrains()
  } catch (error) {
    console.error(error)
  }
}
handleChange(event){
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleClick() {
  this.setState({
    clicked: true
  });
}
findMatchArrivalTime(time) {
  const trains = this.props.trains
  let arrival1 = trains.map(train=> train.arrivalTime1)
  let arrival2 = trains.map(train =>train.arrivalTime2)
  let arralTimeTotal = arrival1.concat(arrival2).sort()

 let matchTimes=[]
 for (let i = 0; i < arralTimeTotal.length; i++) {
  if (arralTimeTotal[i + 1] === arralTimeTotal[i]) {
    matchTimes.push(arralTimeTotal[i])
  }
}
if(matchTimes.length===0) return "There are no trains come at the same time"

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


for(let j=0; j<matchTimes.length; j++){
  console.log("match time:",matchTimes)
  if(matchTimes[j]> time){
    return "Today - " + converseOutputTime(matchTimes[j])
  }
}
return "Tomorrow - " + converseOutputTime(matchTimes[0])
}

render(){
const trains = this.props.trains || []
console.log("trains: ", trains)
let inputTime = this.state.time
const outputTime = this.findMatchArrivalTime(inputTime)
const inputTimeDirection = '(24hours format, example: 21:30)'
    return(
      <div>
        <div>
          <h1>Welcome to TOMO Station!</h1>
        </div>
        <div>
          <form>
            <label id='find-time'>
               Find next time that has mutiple trains come at the same time?
               <br/>
               Put in your time:
               {this.state.time.length>5 || this.state.time.length <5 && inputTimeDirection && <span className="warning">{inputTimeDirection}</span>}
              <input type="text" name="time" value ={this.state.time} onChange={this.handleChange}/>
            </label>

          </form>

          {this.state.time ?
          (<div>
            <h3>Next time you see mutiple trains arrive at the same time:  {outputTime} </h3>

          </div>)
           : null}
        </div>
        <div className="create-button">
              <button type="button" id="add-schelude" onClick={this.handleClick} > Add Train Schedule </button>
              {this.state.clicked ?  <CreateTrainSchedule addTrainToState ={this.props.addTrain} /> : null}
        </div>
        <div>
          <h2>Trains arrive at ToMo station </h2>
          {
            trains.map(train =><Train train={train} key={train.id} deleteTrain={this.props.deleteTrain}/>)
          }
        </div>
      </div>
    )
  }

}

const mapState =(state)=>{
  return{
    trains: state.trains
  }
}

const mapDispatch =(dispatch)=>{
  return{
    getAllTrains: ()=> dispatch(fetchTrainsThunk()),
    deleteTrain: (train)=> dispatch(removeTrainThunk(train))
  }
}
export default connect(mapState,mapDispatch)(Trains)
