import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const index = ({ theme }) => {
  const router = useRouter();
  const path = router.pathname;

  // Add more dynamic meta information
  const title = "Nick Shum | Software Developer";
  const description =
    "Full-stack software developer specializing in web development, React, and modern JavaScript applications. View my portfolio, projects, and experience.";
  const siteUrl = "https://www.nickshum.ca";

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content={description} />
      <meta name="author" content="Nick Shum" />
      <meta
        name="theme-color"
        content={theme === "dark" ? "#191919" : "#E4E5E7"}
      />
      <meta name="robots" content="index, follow" />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="Nick Shum Portfolio" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Keywords */}
      <meta
        name="keywords"
        content="Nick Shum, Software Developer, Web Development, React, JavaScript, Full Stack Developer, Portfolio"
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon/favicon48.ico" sizes="any" />
      <link rel="icon" href="/favicon/favicon144.png" type="image/png" />
      <link rel="apple-touch-icon" href="/favicon/favicon180.png" />
      <link rel="manifest" href="/favicon/manifest.webmanifest" />
      <link rel="canonical" href={`${siteUrl}${path}`} />
    </Head>
  );
};

export default index;
