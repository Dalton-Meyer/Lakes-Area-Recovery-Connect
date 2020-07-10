import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Pane } from 'evergreen-ui'
import './EventsPage.css'


// this is the header component that displays on every page

class Events extends Component {
    render() {
        return (
            <Pane
                width='100%'
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default">
                    <Pane
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
            </Pane>
            </Pane>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps)(Events);