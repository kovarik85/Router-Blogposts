import React from 'react';
import { useParams } from 'react-router-dom';
import{useState,useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const BlogDetails = () => {
  const { id } = useParams();

  const [blogPosts, setBlogPosts] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      
      setBlogPosts(response.data);
    } catch {
      setHasError(true);
    }
  }, [id]);

  return !blogPosts
    ? 'Loading..??.'
    : ( <Card key={blogPosts.id} color="green">
          <div className="card-body">
            <h5 className="card-title">{blogPosts.title}</h5>
            <p className="card-text">{blogPosts.body}</p>
          </div>
        </Card>
      );
};

export default BlogDetails;
