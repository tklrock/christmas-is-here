import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import path from 'path';
import { SongCard } from '../../components/Custom/songCard';

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
            <h1>Music</h1>
            {songs?.length > 0 
            ? (
                <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                    {songs.map(song => (
                        // <Link key={song.song_id} href={`songs/${encodeURIComponent(song.song_id.toString())}`} className="text-black text-decoration-none" style={{width:'400px'}}>
                        <div style={{width:'400px'}} key={song.song_id}>
                            <SongCard song = {song}/>
                        </div>
                            
                        // </Link>
                    ))}
                </div>
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