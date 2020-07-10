import React, { Component } from "react";
import { connect } from "react-redux";
import { Pane, TextInput, Table, Textarea, Button } from "evergreen-ui"
import './NotesPage.css'


// this is the header component that displays on every page

class Notes extends Component {
    state = {
        note: '',
        note_title: '',
    }
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
                    display="flex"
                    height={700}
                    justifyContent="center"
                    border="default">
                    <div className='notes'>
                        <h1>Add Personal Note</h1>
                        <TextInput
                            placeholder='Note Title'
                            onChange={e => this.setState({ note_title: e.target.value })}
                        />
                        <br />
                        <Textarea
                            name="textarea-1"
                            placeholder="Personal Note..."
                            width={500}
                            height={250}
                            onChange={e => this.setState({ note: e.target.value })}
                        />
                        <br />
                        <br />

                        <Button appearance="primary" iconBefore="download">Submit</Button>
                        <h2>Notes</h2>
                        <Table>
                            <Table.Head>
                                <Table.TextHeaderCell>
                                    Title
          </Table.TextHeaderCell>
                                <Table.TextHeaderCell>
                                    Date
          </Table.TextHeaderCell>
                                <Table.TextHeaderCell>
                                    Edit
          </Table.TextHeaderCell>
                                <Table.TextHeaderCell>
                                    Remove
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
export default connect(mapStateToProps)(Notes);