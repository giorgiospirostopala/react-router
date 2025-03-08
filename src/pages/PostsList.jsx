import axios from 'axios';
import { useEffect, useState } from 'react';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    const url = import.meta.env.VITE_ENDPOINT_URL;

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setPosts(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <h1>Lista dei post</h1>
            <div>
                <div>
                    {posts.map((elem) => {
                        const { id, title, tags } = elem;

                        return (
                            <div key={id}>
                                <div>
                                    <h5>{title}</h5>
                                    <p>{tags}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default PostsList;