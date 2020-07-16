
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Pane, Text, Table } from 'evergreen-ui';


import moment from 'moment'

class AboutPage extends Component{

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
    {this.props.user ? <h1>Welcome {this.props.user.username}</h1> : <h1>Welcome</h1>}
        
        <br />
        
        <Pane
          elevation={3}
          float="center"
          height={250}
          margin={30}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <h2>Why I created this website:</h2>
          <Text margin={10} size={600}>Being apart of the Lakes Area recovery group for a few years.
           I always thought there is a better way of keep connected with other is the community. So that's why 
           for my solo project a Emerging Digital Academy I deceided to make this website. As a easy way to stay up to date 
           on things happening around you. Board members can keep the events as current as possible and you will have ability
           to create and leave yourself personal notes. Also check on meetings around the area and have access to a phone list
           of places and people willing to help if you're going through a tough time. Thanks for checking out my project hope you enjoy it.</Text>
        </Pane>
        <Pane
          elevation={3}
          float="center"
          height={200}
          margin={30}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <h2>Suggestions:</h2>
          <Text margin={20} size={600}>If you have any suggestions of features you would like to see or any improvements 
          feel free to message me and I will get back to you as soon as possible.<br/>
          <a href='mailto:dalton.meyer.developer@gmail.com'>Click Here</a></Text>
        </Pane>
        
      </div>
    </Pane>
  </Pane>
    )}};

const mapStateToProps = state => ({
  user: state.user,
  event: state.event
});

export default connect(mapStateToProps)(AboutPage);
