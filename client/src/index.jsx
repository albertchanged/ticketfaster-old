import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import EventList from './components/EventList.jsx';
// import Repo from './components/Repo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: []
    }
  }

  componentDidMount() {
    // this.getRepos();
  }

  search (genre, city) {
    // console.log(`${term} was searched`);
    // TODO
    // console.log(term);
    $.ajax({
      url: '/events',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({'genre': genre, 'city': city}),
      success: (data) => {
        console.log('POST success: ', data);
        // this.state.repos.concat(data);
        // this.getRepos();
      },
      error: (data) => {
        console.log('POST error: ', data);
      }
    });
  }

  getRepos() {
    $.ajax({
      url: '/',
      method: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log('GET success: ', data);
        // this.setState({
        //   repos: data
        // });
      },
      error: (data) => {
        console.log('GET error: ', data);
      }
    });
  }

  render () {
    return (<div>
      {/* <img src="../client/dist/githublogo.png" /> */}
      <h1 className="githubHeader"><strong>Ticketfaster</strong></h1>
      {/* <h2 className="fetchbertHeader">&nbsp;/fetchbert</h2> */}
      <Search onClick={this.search.bind(this)}/>
      <EventList events={this.state.events}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));