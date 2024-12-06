/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default async function Home() {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await data.json();
  return (
    <>
      <h1>Static File Serving</h1>
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
