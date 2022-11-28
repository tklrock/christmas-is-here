import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import path from 'path';


const Song = () => {
    const router = useRouter()
    const { song_id } = router.query;

    const [song, setSong] = useState(null);

    React.useEffect(() => {
        if(song_id){
            const baseURL = path.join(process.cwd(), 'api');
            console.log(path.join(baseURL, 'song', song_id.toString()));
            axios.get(path.join(baseURL, 'song', song_id.toString())).then((response) => {
                setSong(response.data.results[0]);
            });
        };
      }, [song_id, setSong]);
  
    return <>
        {song
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
                        <tr key={song.song_id}>
                            <td>{song.song_id}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.rating}</td>
                            <td>{song.year}</td>
                            <td>{song.description}</td>
                        </tr>
                    </tbody>
                </table>
            ): <>
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </>
            }
        
        </>
  }

export default Song;