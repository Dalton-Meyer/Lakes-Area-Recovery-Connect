import React, { Component } from "react";
import { connect } from "react-redux";
import { Pane, TextInput, Table, Textarea, Button, Icon, } from "evergreen-ui"
import './NotesPage.css'
import swal from 'sweetalert';
import moment from 'moment'

// this is the header component that displays on every page

class Notes extends Component {
    state = {
        note: '',
        title: '',
        user: this.props.user.id,
        editId: '',
        isShown: false,
    }

    componentDidMount() {

        this.props.dispatch({ type: "FETCH_NOTES", payload: this.state.user })
    }
    
    update = () => {
        this.props.dispatch({ type: "FETCH_NOTES", payload: this.state.user })
    }
    Edit = () => {
        this.props.dispatch({ type: "EDIT_NOTE", payload: this.state })
        this.setState({ isShown: false })
        this.setState({
            note: '',
            title: ''
        })
    }
    Delete = (id, user) => {
        const info = {
            id: id,
            user: user
        }
        this.props.dispatch({ type: "DELETE_NOTE", payload: info })
       
    }
    Submit = () => {
        this.props.dispatch({ type: "ADD_NOTE", payload: this.state })
        this.setState({
            note: '',
            title: ''
        })
       
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
                            onChange={e => this.setState({ title: e.target.value })}
                            value={this.state.title}
                        />
                        <br />
                        <Textarea
                            name="textarea-1"
                            placeholder="Personal Note..."
                            width={500}
                            height={200}
                            value={this.state.note}
                            onChange={e => this.setState({ note: e.target.value })}
                        />
                        <br />
                        
                        <br />
                        {this.state.isShown ? <> <Button onClick={() => this.setState({ isShown: false, note: '', title: '' })}>Cancel</Button> <Button appearance="danger" intent="danger" iconBefore="download" onClick={this.Edit}>Submit</Button> </> : <Button appearance="primary" iconBefore="download" onClick={this.Submit}>Submit</Button>}
                        {/* <Button appearance="primary" iconBefore="download" onClick={this.Edit}>Submit</Button>
                        <Button appearance="primary" iconBefore="download" onClick={this.Submit}>Submit</Button> */}
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
                                <Table.TextHeaderCell>
                                    View
          </Table.TextHeaderCell>
                            </Table.Head>
                            <Table.Body height={150}>
                                {this.props.notes.map((el, index) => {
                                    return (<div key={index}>
                                        
                                        <Table.Row >
                                            <Table.TextCell>{el.title}</Table.TextCell>
                                            <Table.TextCell>{moment(el.date).format('l')}</Table.TextCell>
                                            <Table.TextCell><Icon cursor='pointer' size={20} intent="primary" icon='edit' onClick={() => this.setState({isShown: true, title: el.title, note: el.note, editId: el.id })} /></Table.TextCell>
                                            <Table.TextCell><Icon cursor='pointer' size={20} icon='delete' onClick={() => this.Delete(el.id, this.state.user)} /></Table.TextCell>
                                            <Table.TextCell><Icon cursor='pointer' size={20} icon='expand-all' onClick={() => swal({ title: el.title, text: el.note })} /></Table.TextCell>
                                        </Table.Row>
                                    </div>
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
        user: state.user,
        notes: state.note,
    }
}
export default connect(mapStateToProps)(Notes);