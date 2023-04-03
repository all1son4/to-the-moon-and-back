import Head from 'next/head'
import React from "react";
import {PalazzoPage} from "../../components/PalazzoPage/PalazzoPage";

export default function PalazzoLanding() {
  return (
    <>
      <Head>
        <title>Mooon Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../../public/favicon.ico" />
      </Head>
      <PalazzoPage />
    </>
  )
}