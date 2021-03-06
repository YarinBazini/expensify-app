import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter,sortByAmount,sortByDate, setEndDate, setStartDate} from '../actions/filters';


class ExpenseListFilter extends React.Component{
    state ={
        calendarFoucused:null
    }
    onDatesChange =({startDate,endDate})=>{
        this.props.dispatch(setEndDate(endDate));
        this.props.dispatch(setStartDate(startDate));
    };
    onFocusChange = (calendarFoucused)=>{
        this.setState(()=>({calendarFoucused}));
    }
    render(){
        return(
                <div>
                <input type="text" value={this.props.filters.text} onChange = {(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select value={this.props.filters.sortBy} onChange = {(e)=>{
                    e.target.value === 'date'? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
                }}> 
                    <option value = "date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFoucused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
        
            </div>
        )
   
}
}



const mapStateToProps = (state)=>{
    return{
        filters:state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilter);