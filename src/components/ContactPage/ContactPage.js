import React, { Component } from "react";
import { connect } from "react-redux";
import { SegmentedControl, Pane, Table } from "evergreen-ui";
import './ContactPage.css'



class Contact extends Component {
  state = {
    options: [
      // { label: 'Support', value: 'support' },
      { label: 'Treatment', value: 'treat' },
      { label: 'Help Line', value: 'help' },
    ],
    value: '',
  }
  componentWillMount() {
    this.setState({ value: 'help' })
    // before page loads it sets the value in state to help
  }
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_CONTACT", payload: this.state.value })
    // when page loads it sends a dispatch to fetch contact list from server with
    // the value of help grabbing all the helpline numbers
  }
  update = (value) => {
    this.setState({ value })
    this.props.dispatch({ type: "FETCH_CONTACT", payload: value })
    // when new segment is click sets state.value to the new value and sends a dispatch out to the server
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
          height={850}
          display="flex"
          justifyContent="center"
          flex-direction="column"
          border="default">
          <div className='contacts'>
            <h1>Contacts</h1>
            <SegmentedControl
              margin={25}
              width={550}
              height={50}
              options={this.state.options}
              value={this.state.value}
              onChange={(value) => this.update(value)}
            />
            <Table className='table'>
              <Table.Head className='tableHead'>
                <Table.TextHeaderCell>
                  Name
                </Table.TextHeaderCell>
                <Table.TextHeaderCell>
                  Phone Number
                </Table.TextHeaderCell>
              </Table.Head>
              <Table.Body>
                {this.props.contact.map((el, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.TextCell className='contactName'>{el.contact_name}</Table.TextCell>
                      <Table.TextCell className='contactPhone'>{el.contact_phone}</Table.TextCell>
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
    contact: state.contact,
  }// brings in contact global state from redux
}
export default connect(mapStateToProps)(Contact);