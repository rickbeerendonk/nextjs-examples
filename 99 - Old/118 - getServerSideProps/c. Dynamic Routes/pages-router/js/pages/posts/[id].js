/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();

  return {
    props: { post: json }
  };
}

function PostsDetailPage({ post }) {
  return (
    <>
      <h1>
        {post.id}. {post.title}
      </h1>
      {post.body}
    </>
  );
}

export default PostsDetailPage;
