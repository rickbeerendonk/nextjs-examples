/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import PostList from '../components/PostList';

function Home({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      <PostList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();

  return {
    props: { posts: json }
  };
}

export default Home;
