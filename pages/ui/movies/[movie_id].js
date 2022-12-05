import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import path from 'path';
import { Progress } from "reactstrap";


const Movie = () => {
    const router = useRouter()
    const { movie_id } = router.query;

    const [movie, setMovie] = useState(null);

    React.useEffect(() => {
        if(movie_id){
            const baseURL = path.join(process.cwd(), 'api');
            // console.log(path.join(baseURL, 'movie', movie_id.toString()));
            axios.get(path.join(baseURL, 'movie', movie_id.toString())).then((response) => {
                setMovie(response.data.results[0]);
            });
        };
      }, [movie_id, setMovie]);
  
    return <>
        {movie
            ? (
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h1>{movie.name}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-5">
                            <div className="row">
                                <h2>{movie.year}</h2>
                            </div>
                            <div className="row">
                                <p style={{fontSize: '15pt'}}>{movie.description}</p>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h4>Rating:<br />
                                    <Progress style= {{height: '25px', fontSize:'14pt', textAlign:'center', backgroundColor: 'white'}}striped color="danger" value={movie.rating * 10} >{movie.rating}</Progress>
                                    </h4>
                                </div>                 
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <a href={movie.link} target="_blank" rel="noreferrer" className="movieLink">
                                        <i className="bi bi-film movieIcon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 text-center">
                            <img src={movie.image} className="w-75 rounded-4"/>
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

export default Movie;