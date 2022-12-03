import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import axios from 'axios';
import Head from "next/head";
import { Col, Row } from "reactstrap";
import path from 'path';
import elfYourself from '../src/assets/images/elfYourself.png'
// import { TeamMember } from '../components/Custom/teamMember';
import Keanna from '../src/assets/images/team/Keanna.jpg'
import Thomas from '../src/assets/images/team/Thomas.jpg'
import Jackson from '../src/assets/images/team/Jackson.jpg'
import Matt from '../src/assets/images/team/Matt.png'
import Mark from '../src/assets/images/team/Mark.jpg'
import Jessie from '../src/assets/images/team/Jessie.JPG'

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

const teamImages = {
  Thomas,
  Jessie,
  Keanna,
  Matt,
  Mark,
  Jackson
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
    <div style={{textAlign: 'center'}}>
      <div style={BackgroundStyles}>
        <h1 className='heading'>(Christmas is Here)</h1>
        <p className='subtitle'>Your one stop shop for Christmas cheer</p>
        {/* <img src='/img/ornamentbg.jpg' style={{visibility: 'hidden', maxHeight: 200}} /> */}
      </div>
      <h1 style={{paddingTop: '50px'}}>Meet the Team!</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {teamMembers?.length > 0 
        ? (
        teamMembers.map(member =>
            (
              <div style={{display: 'flex', flexDirection:'column'}}>
              <Image
                src={teamImages[member.first_name]}
                alt="profile"
                className="rounded-circle m-3"
                width="150"
                height="150"
              />
              <h5>{member.first_name + ' ' + member.last_name}</h5>
              {/* <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.first_name}</td>
                <td>{member.last_name}</td>
                <td>{member.role}</td>
              </tr> */}
              </div>
            )
          )
        ): <>
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </>
      }
      </div>
    </div>
  )
}
