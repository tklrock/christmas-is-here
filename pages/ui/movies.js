import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import path from 'path';
import { MovieCard } from '../../components/Custom/MovieCard';

const Movies = () => {

    const [movies, setMovies] = useState(null);

    React.useEffect(() => {
        const baseURL = path.join(process.cwd(), 'api');
        axios.get(path.join(baseURL, 'movies')).then((response) => {
           setMovies(response.data.results);
        });
      }, []);

    return (
        <>
            <h1>Movies</h1>
            {movies?.length > 0 
            ? (
                <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                    {movies.map(movie => (
                        <Link key={movie.movie_id} href={`movies/${encodeURIComponent(movie.movie_id.toString())}`} className="text-black text-decoration-none" style={{width:'400px'}}>
                            <MovieCard movie = {movie}/>
                        </Link>
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

export default Movies;