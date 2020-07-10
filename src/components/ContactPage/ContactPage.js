import React, { Component } from "react";
import { connect } from "react-redux";
import { SegmentedControl, Pane } from "evergreen-ui";
import './ContactPage.css'


// this is the header component that displays on every page

class Contact extends Component {
  state = {
    options: [
      { label: 'Support', value: 'support' },
      { label: 'Treatment', value: 'treatment' },
      { label: 'Help Line', value: 'help_line' },
    ],
    value: '',
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
            <SegmentedControl
              width={550}
              height={50}
              options={this.state.options}
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />
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
export default connect(mapStateToProps)(Contact);