import React, { useState, useEffect } from 'react';
import './index.css';
import mobile from './assets/pattern-divider-mobile.svg';
import desktop from './assets/pattern-divider-desktop.svg';
import dice from './assets/icon-dice.svg';

interface Slip {
  id: string;
  advice: string;
}

function App() {
  const [text, setText] = useState<Slip | null>(null);

  async function fetchData() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data)
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
    <div className='w-full h-screen bg-db p-9 flex flex-col justify-center items-center'>
      <div className='bg-gb flex relative justify-center items-center flex-col rounded-xl p-6 text-center max-w-[90%] md:max-w-[35rem]'>
        {text ? (
          <>
            <h1 className='text-ng tracking-[0.2rem] uppercase text-[0.75rem] font-bold mb-4'>
              Advice #{text.id}
            </h1>
            <p className='text-lc font-bold text-[1.5rem] lg:text-[1.8rem] mb-4'>
              "{text.advice}"
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <div className='flex w-full mb-11 items-center justify-center'>
          <div className='border h-0 border-[gray] w-full'></div>
            <img className="w-min"src={mobile}/>
          <div className='border h-0 border-[gray] w-full'></div>
        </div>

        <div className='absolute bottom-[-2rem]'>
          <button
            onClick={async () => {
              const slip = await fetchData();
              setText(slip);
            }}
            className='bg-ng rounded-full cursor-pointer hover:drop-shadow-2xl hover:brightness-150 flex justify-center items-center w-[4rem] h-[4rem]'
          >
            <img className='w-6 h-6' src={dice} alt='Get new advice' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
