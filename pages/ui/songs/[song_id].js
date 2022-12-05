import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import path from 'path';
import { Progress } from "reactstrap";


const Song = () => {
    const router = useRouter()
    const { song_id } = router.query;

    const [song, setSong] = useState(null);

    React.useEffect(() => {
        if(song_id){
            const baseURL = path.join(process.cwd(), 'api');
            // console.log(path.join(baseURL, 'song', song_id.toString()));
            axios.get(path.join(baseURL, 'song', song_id.toString())).then((response) => {
                setSong(response.data.results[0]);
            });
        };
      }, [song_id, setSong]);
  
    return <>
        {song
            ? (
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h1>{song.title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-5">
                            <div className="row">
                                <h2>{song.artist}</h2>
                            </div>
                            <div className="row">
                                <p style={{fontSize: '15pt'}}>&quot;{song.album}&quot;</p>
                            </div>
                            <div className="row">
                                <div className="col">
                                <p style={{fontSize: '15pt'}}>{song.year}</p>
                                </div>                 
                            </div>
                            <div className="row">
                                <div className="col">
                                <p style={{fontSize: '15pt'}}>{song.Duration}</p>
                                </div>                 
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                <a href={song.link} className="spotify" target="_blank">
                                    <img className="spotifyImg w-50" src="https://pnggrid.com/wp-content/uploads/2021/05/Spotify-PNG-Logo.png"  />
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 text-center">
                            <img src={song.image} className="w-100 rounded-4"/>
                        </div>
                        <div className="col-1"></div>
                        
                    </div>
                    
                </div>
            ): <>
                <div class="d-flex justify-content-center">
                    <div className="spinner-border text-center" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </>
            }
        
        </>
  }

export default Song;