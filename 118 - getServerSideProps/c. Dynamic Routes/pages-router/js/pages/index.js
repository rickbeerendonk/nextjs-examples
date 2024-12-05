/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import Link from 'next/link';

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();

  return {
    props: { posts: json }
  };
}

function Home({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
