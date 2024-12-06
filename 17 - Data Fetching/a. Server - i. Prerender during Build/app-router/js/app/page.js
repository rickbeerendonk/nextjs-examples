/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default async function Page() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await res.json();
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
