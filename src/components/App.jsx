import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    state = {
        songs: []
    }

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

    }

    render() { 
        return (
            <React.Fragment>
                <h1>Async Await Axios testing</h1>
                <button onClick={this.getAllSongs}>Get All Songs</button>
            </React.Fragment>
          );
    }
}

export default App;