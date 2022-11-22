import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios';
import Head from "next/head";
import { Col, Row } from "reactstrap";
import path from 'path';

export default function Home() {

  const [movies, setMovies] = useState(null);
  const [teamMembers, setTeamMembers] = useState(null);

  React.useEffect(() => {
    const baseURL = path.join(process.cwd(), 'api');
    axios.get(path.join(baseURL, 'getMovies')).then((response) => {
       setMovies(response.data.results);
    });
    axios.get(path.join(baseURL, 'getTeam')).then((response) => {
       setTeamMembers(response.data.results);
    });
  }, []);

  return (
    <>
        <h3>Movies</h3>
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
          ): <p>No movies</p>
        }

        <h3>Team Members</h3>
        {teamMembers?.length > 0 
          ? (
          <table>
            <thead>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
            </thead>
            <tbody>
          {teamMembers.map(member =>
              (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.first_name}</td>
                  <td>{member.last_name}</td>
                  <td>{member.role}</td>
                </tr>
              )
            )
          }
            </tbody>
          </table>
          ): <p>No team members</p>
        }
    </>
  )
}
