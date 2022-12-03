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

const iconStylesRed = {
  backgroundColor: 'red',
  borderRadius: '50%',
  width: '100px',
  height: '100px',
  border: 'black',
  borderWidth: '3px',
  borderStyle: 'solid'
}

const iconStylesGreen = {
  backgroundColor: 'green',
  borderRadius: '50%',
  width: '100px',
  height: '100px',
  border: 'black',
  borderWidth: '3px',
  borderStyle: 'solid'
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
      <div className='banner-bg'>
        <h1 className='heading'>(Christmas is Here)</h1>
        <p className='subtitle'>Your one-stop shop for Christmas cheer</p>
      </div>
      
      <div className='lights-bg-styles'>
        <Link href='/ui/movies' className='icon-link'>
          <div className='icon-styles icon-green' href='/ui/movies'> 
            <i className='bi bi-film' style={{fontSize: '40px'}}/>
            <div>Movies</div>
          </div>
        </Link>
        <Link href='/ui/songs' className='icon-link'>
          <div className='icon-styles icon-red'> 
            <i className='bi bi-music-note-beamed' style={{fontSize: '40px'}}/>
            <div>Music</div>
          </div>
        </Link>
        <Link href='/ui/elf' className='icon-link'>
          <div className='icon-styles icon-green'> 
            <i className='bi bi-person-circle' style={{fontSize: '40px'}}/>
            <div>Elf Yourself</div>
          </div>
        </Link>
        <Link href='/ui/wishlist' className='icon-link'>
          <div className='icon-styles icon-red'> 
            <i className='bi bi-list-stars' style={{fontSize: '40px'}}/>
            <div>Wishlist</div>
          </div>
        </Link>
        <Link href='/ui/advent' className='icon-link'>
          <div className='icon-styles icon-green'> 
            <i className='bi bi-calendar-heart' style={{fontSize: '40px'}}/>
            <div>Advent</div>
          </div>
        </Link>
      </div>
      <h1 style={{paddingTop: '50px'}}>Meet the Team!</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {teamMembers?.length > 0 
        ? (
        teamMembers.map(member =>
            (
              <div key={member.id} style={{display: 'flex', flexDirection:'column'}}>
                <Image
                  src={teamImages[member.first_name]}
                  alt="profile"
                  className="rounded-circle m-3"
                  width="150"
                  height="150"
                />
                <h5>{member.first_name + ' ' + member.last_name}</h5>
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
