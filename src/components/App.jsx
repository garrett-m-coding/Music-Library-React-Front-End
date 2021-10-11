import axios from 'axios';
import React, { Component } from 'react';
import SongsTable from './SongsTable/SongsTable';
import AddSong from './AddSong/AddSong';


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

    createSong = async (newSong) => {
        try{
            console.log('From the createSong on App Component', newSong);
            this.state.songs.push(newSong);
            this.setState({
                songNumber: this.state.songs.length - 1
            })
        }
        catch (ex) {
            console.log('Error in API call!')
        }
    }

    deleteSong = async (songId) => {
        alert(`Hey, deleteSong for ${songId} was triggered!`)
        try{
            console.log('From the deleteSong on App Component', songId);
            this.state.songs.

        }
        catch (ex) {
            console.log('Error in API call!')
        }
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Async Await Axios testing</h1>
                <button onClick={this.getAllSongs}>Refresh All Songs</button>
                <SongsTable allSongs = {this.state.songs} />
                <AddSong createNewSong={this.createSong} />
            </React.Fragment>
          );
    }
}

export default App;