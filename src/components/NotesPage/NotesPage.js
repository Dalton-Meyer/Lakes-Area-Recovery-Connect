import React, { Component } from "react";
import { connect } from "react-redux";
import {Pane, Tab, Tablist, Select, Table, Textarea, Button} from "evergreen-ui"
import './NotesPage.css'


// this is the header component that displays on every page

class Notes extends Component {
    state = {
     
    }
  render() {
    return (
        <div className='notes'>
            <h1>Add Personal Note</h1>
            <Pane className='textArea'>
            <Textarea
  name="textarea-1"
  placeholder="Personal Note..."
/>
</Pane>
<Button appearance="primary" iconBefore="download">Submit</Button>
            <h2>Notes</h2>
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