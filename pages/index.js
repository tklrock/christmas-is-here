import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios';
import Head from "next/head";
import { Col, Row } from "reactstrap";
import path from 'path';

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
