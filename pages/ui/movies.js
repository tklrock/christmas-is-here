import React, { useState } from 'react'
import axios from 'axios';
import path from 'path';

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
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Year</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        {movies.map(movie =>
                            (
                                <tr key={movie.movie_id}>
                                <td>{movie.movie_id}</td>
                                <td>{movie.name}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.year}</td>
                                <td>{movie.description}</td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            ): <>
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            </>
            }
        </>
    )
}

export default Movies;