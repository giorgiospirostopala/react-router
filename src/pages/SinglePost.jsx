import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SinglePost = () => {

    const { id } = useParams();
    const [post, setPost] = useState(
        {
            id: "",
            title: "",
            content: "",
            img: "",
            tags: []
        }
    );
    const url = import.meta.env.VITE_ENDPOINT_URL;

    useEffect(() => {
        axios
            .get(url + "/" + id)
            .then((res) => setPost(res.data))
            .catch((err) => console.error(err));
    }, [id])

    return (
        <h1>{post.title}</h1>
    )

};

export default SinglePost;