import React, { useEffect } from "react";
import Home from "../components/pages/Home";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { log } from "console";
import Head from "next/head";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log("ready");
    });
  });

  return (
    <>
      <Head>
        <title>Wonderwall Studio – Beautifull Wallpapers</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
