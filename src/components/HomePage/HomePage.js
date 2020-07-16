
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Pane, Text, Table } from 'evergreen-ui';
import './HomePage.css'
import moment from 'moment'

class HomePage extends Component{

  componentDidMount(){
    this.props.dispatch({type: "FETCH_EVENT_MAIN"})
  }

  render(){
    return(
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
      border="default">
      <div className='homePage'>
        
        <br />
        <Pane
          elevation={3}
          float="center"
          width={600}
          height={250}
          margin={30}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <h1>Lakes Area Recovery Connect</h1>
          <hr/>
          <Text size={600}>Helping people in recovery around the Lakes Area stay organized and connected with their community.</Text>
        </Pane>
        <h2>Upcoming Events</h2>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>
              Event
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
              Group
          </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Location
          </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Date
          </Table.TextHeaderCell>
          </Table.Head>
          <Table.Body>
          {this.props.event.map((el, index) => {
                                    return (<div key={index}>
                                        <Table.Row>
                                            <Table.TextCell>{el.event_name}</Table.TextCell>
                                            <Table.TextCell>{el.organization}</Table.TextCell>
                                            <Table.TextCell>{el.event_location}</Table.TextCell>
                                            <Table.TextCell>{moment(el.event_date).format('l')}</Table.TextCell>

                                        </Table.Row>
                                        </div>)})}
          </Table.Body>
        </Table>
      </div>
    </Pane>
  </Pane>
    )}};

const mapStateToProps = state => ({
  user: state.user,
  event: state.event
});

export default connect(mapStateToProps)(HomePage);