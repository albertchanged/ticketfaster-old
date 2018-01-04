import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: '',
      city: ''
    }
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