import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import path from 'path';


const Story = () => {
    const router = useRouter()
    const { story_id } = router.query;

    const [story, setStory] = useState(null);

    React.useEffect(() => {
        if(story_id){
            const baseURL = path.join(process.cwd(), 'api');
            // console.log(path.join(baseURL, 'story', story_id.toString()));
            axios.get(path.join(baseURL, 'story', story_id.toString())).then((response) => {
                setStory(response.data.results[0]);
            });
        };
      }, [story_id, setStory]);
  
    return <>
        {story
            ? (
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>{story.title}</h1>
                        </div>
                        <div className="col-6">
                            <h2>{story.artist}</h2>
                        </div>
                    </div>
                    
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Link</th>
                        </thead>
                        <tbody>
                            <tr key={story.story_id}>
                                <td>{story.story_id}</td>
                                <td>{story.title}</td>
                                <td>{story.author}</td>
                                <td>{story.description}</td>
                                <td>{story.rating}</td>
                                <td>{story.link}</td>
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

export default Story;