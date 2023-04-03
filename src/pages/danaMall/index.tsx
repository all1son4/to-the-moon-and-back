import Head from 'next/head'
import {DanaMallPage} from "../../components/DanaMallPage/DanaMallPage";
import React from "react";

export default function DanaMallLanding() {
  return (
    <>
      <Head>
        <title>Mooon Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../../public/favicon.ico" />
      </Head>
      <DanaMallPage />
    </>
  )
}