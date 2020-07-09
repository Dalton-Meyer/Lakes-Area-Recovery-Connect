import React, { Component } from "react";
import { connect } from "react-redux";
import {Pane, Tab, Tablist, Select, Table} from "evergreen-ui"
import './MeetingPage.css'


// this is the header component that displays on every page

class Notes extends Component {
    state = {
     
    }
  render() {
    return (
        <div className='meetings'>
            <Table>
      <Table.Head>
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
export default connect(mapStateToProps)(Notes);