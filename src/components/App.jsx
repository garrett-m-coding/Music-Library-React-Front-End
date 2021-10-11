import axios from 'axios';
import React, { Component } from 'react';
import SongsTable from './SongsTable/SongsTable'

class App extends Component {
    // constructor(props){
    //     super(props);
        state = {
            songs: []
        }
    // }

    componentDidMount(){
        this.getAllSongs();
    }

    getAllSongs = async () => {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            console.log(response.data)
            this.setState({
                songs: response.data
            });
        }
        catch (ex) {
            console.log('Error in API call!');
        }
    }

    deleteSong = async (songId) => {
        alert(`Hey, deleteSong for ${songId} was triggered!`)

    }

    createSong = async () => {
        try{

        }
        catch (ex) {
            console.log('Error in API call!');
        }
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Async Await Axios testing</h1>
                <button onClick={this.getAllSongs}>Refresh All Songs</button>
                <SongsTable allSongs = {this.state.songs} />
            </React.Fragment>
          );
    }
}

export default App;