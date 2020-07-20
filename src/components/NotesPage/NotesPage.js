import React, { Component } from "react";
import { connect } from "react-redux";
import { Pane, TextInput, Table, Textarea, Button, Icon, } from "evergreen-ui"
import './NotesPage.css'
import swal from 'sweetalert';
import moment from 'moment'

// this page only shows when you are logged in

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
        // grabs all the notes from database based on the user id of the person logged in
    }
    
    Edit = () => {
        // when edit is clicked it sets the state to the value of the note you clicked
        // and pops up 2 new buttons if you hit cancel it will reset state and nothing will happen
        // if you hit submit it will update the info in the database to the new info
        this.props.dispatch({ type: "EDIT_NOTE", payload: this.state })
        this.setState({ isShown: false })
        this.setState({
            note: '',
            title: ''
        })
        swal({
            title: "Thanks!",
            text: "Your note has been updated",
            icon: "success",
          }); // lets you know new info has been submitted
    }
    Delete = (id, user) => {
        // function takes the id of the note and sends off to the server to delete it
        // also sends off user id to grab all the notes again once it is finished with delete
        const info = {
            id: id,
            user: user
        }
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this note!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }) // conformation to make sure you really want to delete the note
          .then((willDelete) => {
            if (willDelete) {
                this.props.dispatch({ type: "DELETE_NOTE", payload: info })
              swal("Your note has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your note is safe!");
            }
          });
        
       
    }
    Submit = () => {
        // sends off information in current state to add a new note to the database
        this.props.dispatch({ type: "ADD_NOTE", payload: this.state })
        this.setState({
            note: '',
            title: ''
        })
        swal({
            title: "Thanks!",
            text: "You added a new note!",
            icon: "success",
          }); // lets you know it was sent off
       
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
                    className='background'
                    width='70%'
                    display="flex"
                    height={850}
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
                        <Table className='table'>
                            <Table.Head className='tableHead'>
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
                            <Table.Body height={150} className='tableHead'>
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
    } // brings in user and notes info from global state
}
export default connect(mapStateToProps)(Notes);