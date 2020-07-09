import React, { Component } from "react";
import { connect } from "react-redux";
import {Pane, Tab, Tablist, Select, Table} from "evergreen-ui"
import './ReadingPage.css'
import Iframe from "react-iframe"


// this is the header component that displays on every page

class ReadingPage extends Component {
    state = {
        meeting: 2,
    }
  render() {
    return (
        <div className='reading'>
            <Pane height={120}>
            <h1>Daily Reading</h1>
            <br/>
            <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                <Tab id='org' onSelect={() => this.setState({ meeting: 1 })} isSelected={1 === this.state.meeting}>
                    Daily Reflection
                </Tab>
                ||
                <Tab id='org' onSelect={() => this.setState({ meeting: 2 })} isSelected={2 === this.state.meeting}>
                    Just for Today
                </Tab>
            </Tablist>
            </Pane>
            {this.state.meeting === 2 ? 
            <Iframe url="https://www.jftna.org/jft/"
        width="100%"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
           : <Iframe url="https://aatimes.org.au/readings/daily"
           width="100%"
           height="650px"
           id="myId"
           className="myClassname"
           display="initial"
           position="relative"/>}
       
      </div>
    )
  }
}

export default connect()(ReadingPage);