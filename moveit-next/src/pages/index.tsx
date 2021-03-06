import Head from "next/head";
import { GetServerSideProps } from "next";
import React from "react";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";



import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";



export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />     
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const user ={
    level: 1, 
    currentExperience: 50,
    challengesCompleted: 2,
  }

  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props:{
      level,
      currentExperience, 
      challengesCompleted
    }
  }
}
