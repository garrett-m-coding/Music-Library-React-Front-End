import React from 'react';
import './SongsTable.css';

const SongsTable = (props) => {
    console.log(props)
    return (
        <table className='table'>
            <thead className='tr:nth-child'>
                <td className='th'> Song Title </td>
                <td className='th'> Artist </td>
                <td className='th'> Album </td>
                <td className='th'> Release Date </td>
                <td className='th'> Genre </td>
            </thead>
            <tbody>
                {props.allSongs.map((song) => {
                    return(
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <button onClick={props.deleteSong}> Delete Song</button>
                        </tr>
                    )
                })}
            </tbody>
        </table>    
    );
}

export default SongsTable;



/* <h2>A basic HTML table</h2>

<table style="width:100%">
    <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
    </tr>
    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
    </tr>
</table>

<p>To undestand the example better, we have added borders to the table.</p> */
