import React from 'react'
import {connect} from 'react-redux'
import {fetchTrainsThunk} from '../store/trains'
import Train from './Train'

export class Trains extends React.Component{

componentDidMount(){
  try {
    this.props.getAllTrains()
  } catch (error) {
    console.error(error)
  }
}
  render(){
    const trains = this.props.trains || []
    console.log("trains: ", trains)
    return(
      <div>
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
