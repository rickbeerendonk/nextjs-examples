/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default function Home() {
  const maxValue = 10;

  return (
    <>
      <p>
        String: <img alt="React" />
      </p>
      <p>
        Non-string:
        <input type="number" disabled={false} min={0} max={maxValue} />
      </p>
      <p>
        Expression:
        <input type="date" value={new Date().toISOString().substring(0, 10)} />
      </p>
    </>
  );
}
