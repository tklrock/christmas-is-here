import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import axios from 'axios';
import Head from "next/head";
import { Col, Row } from "reactstrap";
import path from 'path';
import elfYourself from '../src/assets/images/elfYourself.png'

const BackgroundStyles = {
  backgroundImage: "url('/img/ornamentbg.jpg')",
  backgroundRepeat: 'no-repeat',
  borderRadius: '25px',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 300
}

export default function Home() {

  const [teamMembers, setTeamMembers] = useState(null);

  React.useEffect(() => {
    const baseURL = path.join(process.cwd(), 'api');
    axios.get(path.join(baseURL, 'team_members')).then((response) => {
       setTeamMembers(response.data.results);
    });
  }, []);

  return (
    <>
      <div style={BackgroundStyles}>
        <h1 className='heading'>(Christmas is Here)</h1>
        <p className='subtitle'>Your one stop shop for Christmas cheer</p>
        {/* <img src='/img/ornamentbg.jpg' style={{visibility: 'hidden', maxHeight: 200}} /> */}
      </div>
      <h1>Team Members</h1>
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
        ): <>
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </>
      }
    </>
  )
}
