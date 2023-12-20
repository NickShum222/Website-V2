import React from "react";
import Head from "next/head";
import {useRouter} from 'next/router';

const index = ({ theme }) => {
    const router = useRouter();
    const path = router.pathname;
  return (
    <Head>
      <title>Nick Shum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description" content="Nick Shum | Software Developer" />
      <meta name="author" content="Nick Shum" />
      <meta
        name="theme-color"
        content={theme === "dark" ? "#191919" : "#E4E5E7"}
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />

      <link rel="icon" href="/favicon/favicon48.ico" sizes="any" />
      <link rel="icon" href="/favicon/favicon144.png" type="image/png" />
      <link rel="apple-touch-icon" href="/favicon/favicon180.png" />
      <link rel="manifest" href="/favicon/manifest.webmanifest" />
        <link rel='canonical' href={`www.nickshum.ca${path}`} />
    </Head>
  );
};

export default index;
