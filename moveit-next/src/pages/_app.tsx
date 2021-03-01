import { useState } from 'react';
import '../styles/global.css';

import { ChallengesContext } from '../contexts/ChallengesContext'


function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);

  function levelUp() {

  }

  return (
    <ChallengesContext.Provider value={{level: 1, levelUp}}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  ) 
}

export default MyApp
