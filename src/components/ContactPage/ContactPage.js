import React, { Component } from "react";
import { connect } from "react-redux";
import { SegmentedControl, Pane, Table } from "evergreen-ui";
import './ContactPage.css'


// this is the header component that displays on every page

class Contact extends Component {
  state = {
    options: [
      { label: 'Support', value: 'support' },
      { label: 'Treatment', value: 'treat' },
      { label: 'Help Line', value: 'help' },
    ],
    value: '',
  }
  componentDidUpdate(){
    this.props.dispatch({type: "FETCH_CONTACT", payload: this.state.value})
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
          height={800}
          display="flex"
          justifyContent="center"
          flex-direction="column"
          border="default">
          <div className='contacts'>
            <Pane elevation={3}>
            <h1>Contacts</h1>
            </Pane>
            {console.log(this.state)}
            <SegmentedControl
              margin={25}
              width={550}
              height={50}
              options={this.state.options}
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />
            <Table>
              <Table.Head>
                <Table.TextHeaderCell>
                  Name
                </Table.TextHeaderCell>
                <Table.TextHeaderCell>
                  Phone Number
                </Table.TextHeaderCell>
              </Table.Head>
              <Table.Body>
                {this.props.contact.map((el, index)=>{
                  return(
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
  }
}
export default connect(mapStateToProps)(Contact);