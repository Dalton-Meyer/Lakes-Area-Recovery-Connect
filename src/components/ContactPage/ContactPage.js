import React, { Component } from "react";
import { connect } from "react-redux";
import {SegmentedControl, Pane} from "evergreen-ui";
import './ContactPage.css'


// this is the header component that displays on every page

class Contact extends Component {
    state = {
        options: [
            { label: 'Support', value: 'support' },
            { label: 'Treatment', value: 'treatment' },
            { label: 'Help Line', value: 'help_line' },
          ],
          value: 'hourly',
    }

  render() {
    return (
        <div className='contacts'>
            <Pane>
             <SegmentedControl
      width={240}
      options={this.state.options}
      value={this.state.value}
      onChange={value => this.setState({ value })}
    />
    </Pane>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return{

    }
}
export default connect(mapStateToProps)(Contact);