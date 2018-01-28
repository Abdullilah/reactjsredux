import React, { Component } from 'react';
import '../index.css';
import moment from 'moment';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            date: '',
        }
    }

    addDate(date){
        if(date.text === '' || date.date === ''){
            return;
        }
        this.props.addDate(date);
        this.forceUpdate();
    }

    deleteDate(id){
        this.props.deleteDate(id);
    }

    deleteAllDate(){
        this.props.deleteAllDate();
    }

    changeDate(event){
        this.setState({
            date: event.target.value
        });
    }

    changeText(event){
        this.setState({
            text: event.target.value
        });
    }

    rebderMehtod(){
        const myDates = this.props.r1;
        return (
            <ul>
                {myDates.map((obj)=>{
                    return (
                        <li key={obj.id}>
                            <p>{obj.text}</p>
                            <span>{moment(new Date(obj.date)).fromNow()}</span>
                            <span className="delete"
                                  onClick={() => this.deleteDate(obj.id)}>
                               Delete
                            </span>
                        </li>
                    )
                })}
            </ul>
        );

    }

    render() {
        return (
            <div className="app container">
                <h1 className="text-center">Add Your Reminder</h1>
                <input type="text" className="form-control"
                       onChange={(event) => this.changeText(event)}
                       placeholder="I will do..."/>
                <input type="date" className="form-control"
                       onChange={(event) => this.changeDate(event)}/>
                <button className="btn btn-success"
                        onClick={() => this.addDate(this.state)}>Add Reminder</button>
                <button className="btn btn-danger"
                        onClick={() => this.deleteAllDate()}>Clear All</button>
                <div>{this.rebderMehtod()}</div>
            </div>
        );
    }
}

export default Home;