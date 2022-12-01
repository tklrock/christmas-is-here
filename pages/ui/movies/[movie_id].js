import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import path from 'path';

const Movie = () => {

    const router = useRouter()
    const { movie_id } = router.query;

    const [movie, setMovie] = useState(null);

    React.useEffect(() => {
        if(movie_id){
            const baseURL = path.join(process.cwd(), 'api');
            axios.get(path.join(baseURL, 'movie', movie_id.toString())).then((response) => {
                setMovie(response.data.results[0]);
            });
        };
      }, [movie_id, setMovie]);

    return <>
        {movie
            ? (
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>{movie.name}</h1>
                        </div>
                        <div className="col-6">
                            <h2>{movie.year}</h2>
                        </div>
                    </div>
                    
                    <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Year</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        <tr key={movie.movie_id}>
                            <td>{movie.movie_id}</td>
                            <td>{movie.name}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.year}</td>
                            <td>{movie.description}</td>
                        </tr>
                    </tbody>
                </table>
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