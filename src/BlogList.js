import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      setBlogPosts(response.data);
    } catch {
      console.error('Error');
    }
  }, []);

  return !blogPosts
    ? 'Loading...'
    : blogPosts.map(post => (
        <Card key={post.id} color="green">
          <div className="card-body">
            <Link to={`/blog/${post.id}`} className="card-title">
              {post.title}{' '}
            </Link>
            <p className="card-text">{post.body}</p>
          </div>
        </Card>
      ));
};

export default BlogList;
