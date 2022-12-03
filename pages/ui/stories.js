import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import path from 'path';

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
                        {stories.map(story =>
                            (
                                <tr key={story.story_id}>
                                    <td>{story.story_id}</td>
                                    <Link href={`stories/${encodeURIComponent(story.story_id.toString())}`}>{story.title}</Link>
                                    <td>{story.author}</td>
                                    <td>{story.rating}</td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            ): <>
                <div class="d-flex justify-content-center">
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