import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import axios from 'axios';

export default function Home() {

  const [movies, setMovies] = useState(null);
  const [teamMembers, setTeamMembers] = useState(null);

  React.useEffect(() => {
    axios.get(`http://localhost:3000/api/getMovies`).then((response) => {
       setMovies(response.data.results);
    });
    axios.get(`http://localhost:3000/api/getTeam`).then((response) => {
       setTeamMembers(response.data.results);
    });
  }, []);

  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
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
          ): <p>No movies</p>
        }

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
