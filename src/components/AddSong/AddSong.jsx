import React, { Component } from 'react';

class AddSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: "E.g. 'rock', 'hard rock', 'nu metal', 'metalcore', etc.",
          }
    }

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
}

handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewSong(this.state);
}

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Song Title</label>
                <input name="title" onChange={this.handleChange} value={this.state.title}/>
                <label>Artist</label>
                <input name="artist" onChange={this.handleChange} value={this.state.artist}/>
                <label>Album</label>
                <input name="album" onChange={this.handleChange} value={this.state.album}/>
                <label>Release Date</label>
                <input name="release date" onChange={this.handleChange} value={this.state.release_date}/>
                <label>Genre</label>
                <input name="genre" onChange={this.handleChange} value={this.state.genre}/>
                <button type="submit">Add Song</button>
            </form>
          );
    }
}
 
export default AddSong;