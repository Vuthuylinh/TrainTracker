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
  render(){
    const trains = this.props.trains || []
    console.log("props in Trains" , this.props)
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
