/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Fetched at {new Date().toLocaleTimeString()}</h1>
      <ol>
        {posts.map(post => (
          <li key={post.id} value={post.id}>
            {post.title}
          </li>
        ))}
      </ol>
    </>
  );
}
