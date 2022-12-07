import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import path from 'path';
import { StoryCard } from '../../components/Custom/storyCard';

const Stories = () => {

    const [stories, setStories] = useState(null);

    React.useEffect(() => {
        const baseURL = path.join(process.cwd(), 'api');
        axios.get(path.join(baseURL, 'stories')).then((response) => {
           setStories(response.data.results);
        });
      }, []);

    return (
        <>
            <h1>Stories</h1>
            {stories?.length > 0 
            ? (
                <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                    {stories.map(story => (
                        <Link key={story.story_id} href={`stories/${encodeURIComponent(story.story_id.toString())}`} className="text-black text-decoration-none" style={{width:'400px'}}>
                            <StoryCard story = {story}/>
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

export default Stories;