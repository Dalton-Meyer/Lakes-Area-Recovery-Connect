
import React from 'react';
import { connect } from 'react-redux';
import { Pane, Text, Table } from 'evergreen-ui';
import './HomePage.css'

const HomePage = (props) => (
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
        <h1>Lakes Area Recovery Connect</h1>
        <br />
        <Pane
          elevation={3}
          float="center"
          width={500}
          height={250}
          margin={30}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text size={600}>Helping people in recovery around the Lakes Area stay organized and connected with their community.</Text>
        </Pane>
        <h2>Upcoming Events</h2>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>
              Event
          </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Location
          </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Date
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
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomePage);