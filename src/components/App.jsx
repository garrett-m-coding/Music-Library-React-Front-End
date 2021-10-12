import axios from 'axios';
import React, { Component } from 'react';
import SongsTable from './SongsTable/SongsTable';
import AddSong from './AddSong/AddSong';


class App extends Component {
        state = {
            songs: []
        }

    componentDidMount(){
        this.getAllSongs();
    }

    getAllSongs = async () => {
        try{
            let responseAllSongs = await axios.get('http://127.0.0.1:8000/music/');
            console.log(responseAllSongs.data)
            this.setState({
                songs: responseAllSongs.data
            });
        }
        catch (ex) {
            console.log('Error in API call!');
        }
    }

    addSong = async (newSong) => {
        try{
            let responseCreateSong = await axios.post('http://127.0.0.1:8000/music/', newSong)
            console.log(responseCreateSong.data);
            this.getAllSongs();
        }
        catch (ex) {
            console.log('Error in API call!')
        }
    }

    // deleteSong = async (songId) => {
    //     alert(`Hey, deleteSong for ${songId} was triggered!`)
    //     try{
    //         let responseDeleteSong = await axios.delete('http://127.0.0.1:8000/music/', songId)
    //         console.log(responseDeleteSong.data);
    //         this.setState({
    //             songs: responseDeleteSong.data
    //         });
    //     }
    //     catch (ex) {
    //         console.log('Error in API call!')
    //     }
    // }

    render() { 
        return (
            <React.Fragment>
                <h1>Playlist Curated by famous DJ - GRMac</h1>
                <h3>Add a song:</h3>
                <AddSong addSong={this.addSong}
                getAllSongs={this.getAllSongs} />
                {/* <button onClick={this.getAllSongs}>Refresh All Songs</button> */}
                <SongsTable songs={this.state.songs} />
            </React.Fragment>
          );
    }
}

export default App;