import React, { Component } from "react";
import { connect } from "react-redux";
import {Table} from 'evergreen-ui'
import './EventsPage.css'


// this is the header component that displays on every page

class Events extends Component {
  render() {
    return (
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
    )
  }
}

const mapStateToProps = (state) => {
    return{

    }
}
export default connect(mapStateToProps)(Events);