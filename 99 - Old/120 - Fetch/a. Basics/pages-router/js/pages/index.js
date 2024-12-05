/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

import PostList from '../components/PostList';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      (async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        setPosts(json);
      })();
    },
    [
      /* dependency might be the URL to fetch */
    ]
  );

  return (
    <>
      <h1>Posts</h1>
      <PostList posts={posts} />
    </>
  );
}

export default Home;
