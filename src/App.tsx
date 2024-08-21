import React, { useState, useEffect } from 'react';
import './index.css'


interface Slip {
  id: string;
  advice: string;
}

function App() {
  const [text, setText] = useState<Slip | null>(null);

  async function fetchData() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data.slip;
  }

  useEffect(() => {
    async function loadData() {
      const slip = await fetchData();
      setText(slip);
    }
    loadData();
  }, []);

  return (
    <>
      <div className='w-dvw h-dvh bg-db flex justify-center items-center'>
        {text ? (
          <div>
            <h1>Advice #{text.id}</h1>
            <p>{text.advice}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
