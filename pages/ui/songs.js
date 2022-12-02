import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import path from 'path';

const Songs = () => {

    const [songs, setSongs] = useState(null);

    const displaySongs = () => {
        alert(1);
    }

    React.useEffect(() => {
        const baseURL = path.join(process.cwd(), 'api');
        axios.get(path.join(baseURL, 'songs')).then((response) => {
           setSongs(response.data.results);
        });
      }, []);

    return (
        <>
            <h1>Songs</h1>
            {songs?.length > 0 
            ? (
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Rating</th>
                        <th>Year</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        {songs.map(song =>
                            (
                                <tr key={song.song_id}>
                                    <td>{song.song_id}</td>
                                    <Link href={`songs/${encodeURIComponent(song.song_id.toString())}`}>{song.title}</Link>
                                    <td>{song.artist}</td>
                                    <td>{song.album}</td>
                                    <td>{song.rating}</td>
                                    <td>{song.year}</td>
                                    <td>{song.description}</td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            ): <>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-center" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default Songs;