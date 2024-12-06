/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// Async
export default async function Home() {
  // f.e. use for Headless CMS
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await res.json();
  return (
    <>
      <h1>Static File Serving at {new Date().toLocaleTimeString()}</h1>
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
