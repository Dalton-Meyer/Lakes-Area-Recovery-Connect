import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Pane, TextInput, Select } from 'evergreen-ui'
import './EventsPage.css'


// this is the header component that displays on every page

class Events extends Component {
    state = {
        name: '',
        location: '',
        type: 1,
        user: '',
    }
    componentDidMount() {
        this.setState({ user: this.props.user.user_access })

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
                            <Select value={this.state.type} onChange={event => this.setState({ type: event.target.value })}>
                                <option value="1" selected>AA</option>
                                <option value="2">NA</option>
                                <option value="3">Other</option>
                            </Select>
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
                                </Table.Head>
                                <Table.Body>
                                    <Table.Row>

                                    </Table.Row>
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
                                </Table.Head>
                                <Table.Body>
                                    <Table.Row>

                                    </Table.Row>
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
        user: state.user
    }
}
export default connect(mapStateToProps)(Events);