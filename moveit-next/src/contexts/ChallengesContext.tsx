import { createContext, useState, ReactNode } from 'react';



interface ChallengesContextData {
  level: number;
  currenExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currenExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    console.log('new');
  }

  return (
    <ChallengesContext.Provider value={{level, currenExperience, challengesCompleted, levelUp, startNewChallenge}}>
      {children}
    </ChallengesContext.Provider>
  )
}