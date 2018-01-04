import React from 'react';
import $ from 'jquery';
var config = require('.../../../config.js');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [{'id': 1, 'name': 'San Francisco, CA'}, {'id': 2, 'name': 'Los Angeles, CA'}],
      genre: '',
      city: ''
    }
  }
  componentDidMount() {
    $.ajax({
      url: `https://app.ticketmaster.com/discovery/v2/venues.json?&apikey=${config.KEY}`,
      type: 'GET',
      async: true,
      dataType: "json",
      success: (data) => {
        console.log('GET success: ', data._embedded);
        var venues = data._embedded.venues;
        console.log(venues);
        var locationArray = [];
        venues.forEach((venue) => {
          var locationObj = {
            'id': venue.id,
            'city': venue.city.name,
            'state': venue.country.countryCode
          }
          locationArray.push(locationObj);
        })
        this.setState({
          locations: locationArray
        })
        // this.getRepos();
      },
      error: (data) => {
        console.log('GET error: ', data);
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onClick(this.state.genre, this.state.city);
  }
  sendData() {
    this.setState({
      genre: document.getElementById('genreInput').value,
      city: document.getElementById('cityInput').value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <h3>Specify a genre!</h3>
            <input id="genreInput" type="text" />
            <h3>Specify a city!</h3>
            <select id="cityDropdown">
              {
                this.state.locations.map((location) => (
                  (<option key={location.id} value={location.city + ', ' + location.state}>{location.city + ', ' + location.state}</option>)
                ))
              }
            </select>
            <input id="cityInput" type="text" />
            <button onClick={this.sendData.bind(this)}>Search!</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Search;