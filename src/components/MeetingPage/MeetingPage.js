import React, { Component } from "react";
import { connect } from "react-redux";
import {Pane, Tab, Tablist, Select, Table} from "evergreen-ui"
import './MeetingPage.css'


// this is the header component that displays on every page

class Meeting extends Component {
    state = {
        town: 1,
        meeting: 1,
    }
  render() {
    return (
        <div className='meetings'>
            <h1>Meeting List</h1>
            <Pane height={120}>
            <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                <Tab id='AA' onSelect={() => this.setState({ meeting: 1 })} isSelected={1 === this.state.meeting}>
                    AA
                </Tab>
                ||
                <Tab id='NA' onSelect={() => this.setState({ meeting: 2 })} isSelected={2 === this.state.meeting}>
                    NA
                </Tab>
            </Tablist>
            <Select width={200} value={this.state.town} onChange={event => this.setState({ town: event.target.value })}>
      <option value="1" defaultValue>Detroit Lakes</option>
      <option value="2">Perham</option>
      <option value="3">Frazee</option>
      <option value="4">Fargo</option>
      <option value="5">Moorhead</option>
    </Select>
            </Pane>
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
export default connect(mapStateToProps)(Meeting);