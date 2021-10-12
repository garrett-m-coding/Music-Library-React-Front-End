import React from 'react';
import './SongsTable.css';

const SongsTable = (props) => {
    console.log(props)
    return (
        <table className='table-container'>
            <thead>
                <tr>
                    <th> Song Title </th>
                    <th> Artist </th>
                    <th> Album </th>
                    <th> Release Date </th>
                    <th> Genre </th>
                    <th> Delete Song </th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map((song) => {
                    return(
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            {/* <td><button onClick={this.deleteSong}>Delete</button></td> */}
                        </tr>
                    )
                })}
            </tbody>
        </table>    
    );
}

export default SongsTable;