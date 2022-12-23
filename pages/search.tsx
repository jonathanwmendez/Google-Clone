import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Response from '../response'

type Props = {
  results: string;
}

function Search({ results }: Props) {
  console.log(results)
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

export async function getServerSideProps (context) {
    const useDummyData = true; // Set to true to use DummyData instead of the Google API (100 search limit per day)

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`).then(response => response.json())

    // Passes Results to Client after the Server has rendered
    return {
      props: {
        results: data,
      }
    }
}