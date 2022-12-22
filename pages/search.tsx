import React from 'react'
import Head from 'next/head'
import Header from '../components/header'

type Props = {}

function Search({}: Props) {
  return (
    <div>
        <Head>
            <title>Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <Header />
        {/* Search Results */}
    </div>
  )
}

export default Search