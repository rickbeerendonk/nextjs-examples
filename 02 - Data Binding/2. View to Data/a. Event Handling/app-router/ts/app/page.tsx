/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

'use client';

export default function Home() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}
Data: ${e.nativeEvent.data}`);
  }

  return <input onChange={handleChange} value="Hello React!" />;
}
