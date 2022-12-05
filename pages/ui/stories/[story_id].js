import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import path from 'path';
import { Progress } from "reactstrap";


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
                    <div className="row text-center">
                        <div className="col">
                            <h1>{story.title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <h2>{story.author}</h2>
                            </div>
                            <div className="row">
                                <p style={{fontSize: '15pt'}}>{story.description}</p>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h4>Rating:<br />
                                    <Progress style= {{height: '25px', fontSize:'14pt', textAlign:'center', backgroundColor: 'white'}}striped color="danger" value={story.rating * 20} >{story.rating}</Progress>
                                    </h4>
                                </div>                 
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <a href={story.link} target="_blank" rel="noreferrer" className="bookLink">
                                        <i className="bi bi-book bookIcon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={story.image} className="w-100 rounded-4 m-2"/>
                        </div>
                        
                    </div>
                    
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