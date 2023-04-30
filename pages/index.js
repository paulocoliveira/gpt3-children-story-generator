import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {

  const [userInput, setUserInput] = useState('');

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Children's Story Generator</h1>
          </div>
          <div className="header-subtitle">
            <h2>Input the title of your history here, we will generate the rest for you!</h2>
          </div>
        </div>
        {/* Adicione esse código aqui */}
        <div className="prompt-container">
          <textarea className="prompt-box" placeholder="type here..." value={userInput} onChange={onUserChangedText} />
        </div>
        {/* Novo código que adicionei aqui */}
        <div className="prompt-buttons">
          <a className="generate-button" onClick={null}>
            <div className="generate">
              <p>Gerar</p>
            </div>
          </a>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>Build by Paulo Oliveira with web3dev</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
