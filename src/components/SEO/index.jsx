import React from "react";
import Head from "next/head";
const index = ({theme}) => {
  return (
    <Head>
      <title>Nick Shum</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Nick Shum | Software Developer" />
      <meta name="author" content="Nick Shum" />
      <meta name="theme-color" content={theme === 'dark' ? "#191919" : "#E4E5E7"} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

export default index;
