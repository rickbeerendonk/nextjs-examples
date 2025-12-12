/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// This is a Server Component
// It's being passed as children to a Client Component
import Container from './Container.jsx';

// Server Component that will be passed as children
async function ServerContent() {
  // Simulate server-side data fetching
  const data = await new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          users: ['Alice', 'Bob', 'Charlie'],
          timestamp: new Date().toISOString()
        }),
      100
    );
  });

  return (
    <>
      <h4>Server Component Content</h4>
      <p>
        <strong>Data fetched on server at:</strong> {data.timestamp}
      </p>
      <ul>
        {data.users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default async function Home() {
  return (
    <>
      <h1>Composition: Client Component with Server Children</h1>

      {/* 
        Container is a Client Component, but we're passing ServerContent as children.
        This works because the Server Component is rendered by the Server Component (Home),
        and then passed to the Client Component as a prop.
      */}
      <Container>
        <ServerContent />
      </Container>
    </>
  );
}
