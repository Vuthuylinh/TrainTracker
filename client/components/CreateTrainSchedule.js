import React from 'react'
import {connect} from 'react-redux'

import ScheduleForm from './ScheduleForm'
import {addTrainThunk} from '../store/trains'

const defaultState = {
 name: '',
   arrivalTime1: '',
   arrivalTime2: '',
   errorMessage: ''
 }
 class CreateTrainSchedule extends React.Component {
  constructor(props){
    super(props)
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

   async handleSubmit(){
     try {
     await this.props.addTrainToState(this.state)
     this.setState(defaultState)
   } catch (err){
     this.setState({
       errorMessage: `There was a problem creating the project: ${err.message}`
     })
   }
   }
   handleChange(event){
     this.setState({
       [event.target.name]: event.target.value
     })
   }
   render() {
     return (
     <ScheduleForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
     )
   }
 }

 const mapDispatch = (dispatch) => {
   return {
     addTrainToState: (train) => dispatch(addTrainThunk(train)),

   };
 };
 export default connect(null, mapDispatch)(CreateTrainSchedule)
