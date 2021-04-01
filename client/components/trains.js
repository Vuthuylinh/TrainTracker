import React from 'react'
import {connect} from 'react-redux'
import {fetchTrainsThunk} from '../store/trains'
import Train from './Train'
import CreateTrainSchedule from './CreateTrainSchedule'

export class Trains extends React.Component{
  constructor(){
    super()
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
componentDidMount(){
  try {
    this.props.getAllTrains()
  } catch (error) {
    console.error(error)
  }
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
if(matchTimes.length===0) return "there are no trains come at the same time"

for(let j=0; j<matchTimes.length; j++){
  console.log("match time:",matchTimes)
  if(matchTimes[j]> time){
    return matchTimes[j]
  }
}
return matchTimes[0]
}

render(){
    const trains = this.props.trains || []
    let time = "8:40"
 const something = this.findMatchArrivalTime(time)
 console.log("something here: ",something)
    return(
      <div>
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
