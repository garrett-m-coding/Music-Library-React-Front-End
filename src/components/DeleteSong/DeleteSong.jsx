// import React, { Component } from "react";

// class DeleteSong extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       artist: "",
//       album: "",
//       release_date: "",
//       genre: "",
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.deleteSong(this.state);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>Song Title</label>
//         <input
//           type="text"
//           name="title"
//           required="required"
//           placeholder="Enter a song title..."
//           onChange={this.handleChange}
//           value={this.state.title}
//         />
//         <label>Artist</label>
//         <input
//           type="text"
//           name="artist"
//           required="required"
//           placeholder="Enter the artist..."
//           onChange={this.handleChange}
//           value={this.state.artist}
//         />
//         <label>Album</label>
//         <input
//           type="text"
//           name="album"
//           required="required"
//           placeholder="Enter the album..."
//           onChange={this.handleChange}
//           value={this.state.album}
//         />
//         <label>Release Date</label>
//         <input
//           type="date"
//           name="release_date"
//           required="required"
//           placeholder="Enter the release date..."
//           onChange={this.handleChange}
//           value={this.state.release_date}
//         />
//         <label>Genre</label>
//         <input
//           type="text"
//           name="genre"
//           required="required"
//           placeholder="Enter the song genre..."
//           onChange={this.handleChange}
//           value={this.state.genre}
//         />
//         <button type="submit">Delete Song</button>
//       </form>
//     );
//   }
// }

// export default DeleteSong;