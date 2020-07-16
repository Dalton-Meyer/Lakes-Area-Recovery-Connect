import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Pane, TextInput, Select, Button, Icon } from 'evergreen-ui'
import './EventsPage.css'
import moment from "moment"
import swal from 'sweetalert'


// this is the header component that displays on every page

class Events extends Component {
    state = {
        name: '',
        location: '',
        type: 1,
        date: '',
        time: '',
       
        
    }
    componentDidMount(){
        this.props.dispatch({type: "FETCH_EVENT"}) 
    }

    Submit = () => {
        this.props.dispatch({type: "ADD_EVENT", payload: this.state})
        this.setState({
            name: '',
            location: '',
            type: 1,
            date: '',
            time: '',
        })
        swal({
            title: "Thanks!",
            text: "You added a new note!",
            icon: "success",
          });
    }
    Delete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this event!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.props.dispatch({ type: "DELETE_EVENT", payload: id })
              swal("Your event has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your event is safe!");
            }
          });

    }
    render() { 
        return (
            <Pane
                width='100%'
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default">
                {Number(this.props.user.user_access) > 1 ?
                    <Pane
                        width='70%'
                        height={800}
                        display="flex"
                        justifyContent="center"
                        border="default">
                        <div className='events'>
                            <h1>All Events</h1>
                            <h2>Add Event:</h2>
                            <TextInput
                                onChange={e => this.setState({ name: e.target.value })}
                                value={this.state.name}
                                placeholder="Event Name"
                            />
                            <TextInput
                                onChange={e => this.setState({ location: e.target.value })}
                                value={this.state.location}
                                placeholder="Event Location"
                            />
                            <TextInput
                                onChange={e => this.setState({ date: e.target.value })}
                                value={this.state.date}
                                type="date"
                            />
                            {console.log(this.state)}
                            <TextInput
                                onChange={e => this.setState({ time: e.target.value })}
                                value={this.state.time}
                                type="time"
                            />
                            <Select value={this.state.type} onChange={event => this.setState({ type: event.target.value })}>
                                <option value="1" selected>AA</option>
                                <option value="2">NA</option>
                                <option value="3">Other</option>
                            </Select>
                            <Button margin={10} appearance="primary" iconBefore="download" onClick={()=>this.Submit()}>Submit</Button>
                            <Table>
                                <Table.Head>
                                    <Table.TextHeaderCell>
                                        Event
                                    </Table.TextHeaderCell>
                                    <Table.TextHeaderCell>
                                        Location
                                    </Table.TextHeaderCell>
                                    <Table.TextHeaderCell>
                                        Date
                                    </Table.TextHeaderCell>
                                    <Table.TextHeaderCell>
                                        Time
                                    </Table.TextHeaderCell>
                                    <Table.TextHeaderCell>
                                        Group
                                    </Table.TextHeaderCell>
                                    <Table.TextHeaderCell>
                                        Remove
                                    </Table.TextHeaderCell>
                                </Table.Head>
                                <Table.Body>
                                {this.props.event.map((el, index) => {
                                    return (<div key={index}>
                                        <Table.Row>
                                            <Table.TextCell>{el.event_name}</Table.TextCell>
                                            <Table.TextCell>{el.event_location}</Table.TextCell>
                                            <Table.TextCell>{moment(el.event_date).format('l')}</Table.TextCell>
                                            <Table.TextCell>{moment(el.event_time, 'HH:mm').format('h:mm A')} </Table.TextCell>
                                    <Table.TextCell>{el.organization}</Table.TextCell>
                                    <Table.TextCell><Icon color="danger" cursor='pointer' size={20} icon='delete' onClick={() => this.Delete(el.id)} /></Table.TextCell>
                                        </Table.Row>
                                        </div>)})}
                                </Table.Body>
                            </Table>
                        </div>
                    </Pane>

                    : <Pane
                        width='70%'
                        height={800}
                        display="flex"
                        justifyContent="center"
                        border="default">
                        <div className='events'>
                            <h1>All Events</h1>
                            <Table>
                                <Table.Head>
                                    <Table.TextHeaderCell>
                                        Event
                                    </Table.TextHeaderCell>
                                    <Table.TextHeaderCell>
                                        Location
                                    </Table.TextHeaderCell>
                                    <Table.TextHeaderCell>
                                        Date
                                </Table.TextHeaderCell>
                                <Table.TextHeaderCell>
                                        Time
                                    </Table.TextHeaderCell>
                                    <Table.TextHeaderCell>
                                        Group
                                    </Table.TextHeaderCell>
                                </Table.Head>
                                <Table.Body>
                                {this.props.event.map((el, index) => {
                                    return (<div key={index}>
                                        <Table.Row>
                                            <Table.TextCell>{el.event_name}</Table.TextCell>
                                            <Table.TextCell>{el.event_location}</Table.TextCell>
                                            <Table.TextCell>{moment(el.event_date).format('l')}</Table.TextCell>
                                            <Table.TextCell>{el.event_time} </Table.TextCell>
                                    <Table.TextCell>{el.organization}</Table.TextCell>
                                        </Table.Row>
                                        </div>)})}
                                </Table.Body>
                            </Table>
                        </div>
                    </Pane>}
            </Pane>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        event: state.event
    }
}
export default connect(mapStateToProps)(Events);