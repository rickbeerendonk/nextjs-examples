/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import PostList from '../components/PostList';

export async function getStaticProps() {
  // In reality, use for Headless CMS and not for data!
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
      <PostList posts={posts} />
    </>
  );
}

export default Home;
