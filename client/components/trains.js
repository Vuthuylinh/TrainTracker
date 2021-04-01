import React from 'react'
import {connect} from 'react-redux'
import {fetchTrainsThunk} from '../store/trains'
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
   // this.handleSubmit = this.handleSubmit.bind(this)
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
// handleSubmit(event){
//   let inputTime= this.state.time

//     const trains = this.props.trains
//   let arrival1 = trains.map(train=> train.arrivalTime1)
//   let arrival2 = trains.map(train =>train.arrivalTime2)
//   let arralTimeTotal = arrival1.concat(arrival2).sort()

//  let matchTimes=[]
//  for (let i = 0; i < arralTimeTotal.length; i++) {
//   if (arralTimeTotal[i + 1] === arralTimeTotal[i]) {
//     matchTimes.push(arralTimeTotal[i])
//   }
// }
// if(matchTimes.length===0) return crowdedTime="there are no trains come at the same time"

// for(let j=0; j<matchTimes.length; j++){
//   console.log("match time:",matchTimes)
//   if(matchTimes[j]> inputTime){
//     return crowdedTime= matchTimes[j]
//   }
// }
// this.setState({time:""})
// return crowdedTime=matchTimes[0]
//   event.preventDefault();
//   this.setState({time:""})

// }

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
if(matchTimes.length===0) return "there are no trains come at the same time"

for(let j=0; j<matchTimes.length; j++){
  console.log("match time:",matchTimes)
  if(matchTimes[j]> time){
    return "Today : " +matchTimes[j]
  }
}
return "Tomorrow : " + matchTimes[0]
}

render(){
const trains = this.props.trains || []
//     let time = "9:40"
let inputTime = this.state.time
 const something = this.findMatchArrivalTime(inputTime)
// console.log("something here: ",something)
 const inputTimeDirection = '(follow 24hours format. example: 21:30)'
    return(
      <div>
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

          {this.state.time ? <h1>{something}</h1> : null}
        </div>
        <div className="create-button">
              <button type="button" id="add-schelude" onClick={this.handleClick} > Add Train Schedule </button>
              {this.state.clicked ?  <CreateTrainSchedule addTrainToState ={this.props.addTrain} /> : null}
        </div>
        <div>
          <h1>Trains list</h1>
          {
            trains.map(train =><Train train={train} key={train.id}/>)
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
    getAllTrains: ()=> dispatch(fetchTrainsThunk())
  }
}
export default connect(mapState,mapDispatch)(Trains)
