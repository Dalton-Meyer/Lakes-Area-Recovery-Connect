import React, { Component } from "react";
import { connect } from "react-redux";
import { Pane, Tab, Tablist, Select, Table } from "evergreen-ui"
import './MeetingPage.css'
import moment from 'moment'

// this is the header component that displays on every page

class Meeting extends Component {
    state = {
        town: 1,
        meeting: 2,
    }

    componentDidMount() {
        this.props.dispatch({ type: "FETCH_MEETINGS", payload: this.state })
    }
    // brings in the default meeting info when page is loaded
   
    town = (event) => {
        let newState = {
            town: event.target.value,
            meeting: this.state.meeting
        }
        this.props.dispatch({ type: "FETCH_MEETINGS", payload: newState })
        this.setState({ town: event.target.value })
    } // changes the state depending what town you click then the saga sends a new 
    // get request for server and brings back the updated information

    meeting = (param) => {
        let newState = {}
        if (param === 1) {
            newState = {
                town: this.state.town,
                meeting: 1
            }
            this.setState({ meeting: 1 })
        } else if (param === 2) {
            newState = {
                town: this.state.town,
                meeting: 2
            }
            this.setState({ meeting: 2 })
        }
        this.props.dispatch({ type: "FETCH_MEETINGS", payload: newState })

    }
    // changes the state depending what meeting type you click then the saga sends a new 
    // get request for server and brings back the updated information



    render() {
        return (
            <Pane
                width='100%'
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default">
                <Pane
                    className='background'
                    width='70%'
                    height={850}
                    display="flex"
                    justifyContent="center"
                    border="default">
                    <div className='meetings'>
                        <h1>Meeting List</h1>
                        <Pane height={120}>
                            <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                                <Tab id='AA' onSelect={() => this.meeting(1)} isSelected={1 === this.state.meeting}>
                                    AA
                                </Tab>
                                ||
                                <Tab id='NA' onSelect={() => this.meeting(2)} isSelected={2 === this.state.meeting}>
                                    NA
                                 </Tab>
                            </Tablist>
                            <Select width={200} value={this.state.town} onChange={event => this.town(event)}>
                                <option value="1" defaultValue>Detroit Lakes</option>
                                <option value="2">Perham</option>
                                <option value="3">Frazee</option>
                                <option value="4">Fargo</option>
                                <option value="5">Moorhead</option>
                            </Select>
                        </Pane>
                        <Table className='table'>
                            <Table.Head className='tableHead'>
                                <Table.TextHeaderCell>
                                    Name
                                </Table.TextHeaderCell>
                                <Table.TextHeaderCell>
                                    Day
                                </Table.TextHeaderCell>
                                <Table.TextHeaderCell>
                                    Time
                                </Table.TextHeaderCell>
                                <Table.TextHeaderCell>
                                    Location
                                </Table.TextHeaderCell>
                            </Table.Head>
                            <Table.Body maxHeight={350} className='tableHead'>
                                {this.props.meeting.map((el) => {
                                    return (
                                        <Table.Row>
                                            <Table.TextCell>{el.meeting_name}</Table.TextCell>
                                            <Table.TextCell>{el.meeting_day}</Table.TextCell>
                                            <Table.TextCell>{moment(el.meeting_time, 'HH:mm').format('h:mm A')}</Table.TextCell>
                                            <Table.TextCell>{el.meeting_address}, {el.City}</Table.TextCell>
                                        </Table.Row>
                                    )
                                })}
                            </Table.Body>
                        </Table>
                    </div>
                </Pane>
            </Pane>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        meeting: state.meeting,
    } // brings in the meeting redux from global state
}
export default connect(mapStateToProps)(Meeting);