/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default async function Page() {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await data.json();
  return (
    <ol>
      {posts.map(post => (
        <li key={post.id} value={post.id}>
          {post.title}
        </li>
      ))}
    </ol>
  );
}
