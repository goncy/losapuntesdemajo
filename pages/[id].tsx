import * as React from "react";
import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";

import data from "../data.json";
import styles from "../styles/Home.module.scss";
import {Note} from "../types";

interface Props {
  note: Note;
}

const Home: NextPage<Props> = ({note}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Los apuntes de Majo | {note.title}</title>
        <meta content={note.description} name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Apuntes de {note.title}</h1>
        <p className={styles.description}>{note.description}</p>
        <iframe allow="autoplay" height="480" src={`${note.file}/preview`} width="640" />
        <a className={styles.card} href={`${note.file}/view`}>
          <h2>Descargar &rarr;</h2>
        </a>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<any, any> = async ({params: {id}}) => {
  const note = data.find((note) => note.id === id);

  return {
    props: {
      note,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: data.map((note) => ({params: {id: note.id}})),
    fallback: false,
  };
};

export default Home;
