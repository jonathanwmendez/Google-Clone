import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Response from '../response'
import { useRouter } from 'next/router'
import SearchResults from '../components/searchResults'

type Props = {
  results: string;
}

function Search({ results }: Props) {
  const router = useRouter()

  console.log(results)
  return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="/googleGIcon.svg" />
        </Head>

        {/* Header */}
        <Header />

        {/* Search Results */}
        <SearchResults results={results} />

    </div>
  )
}

export default Search

export async function getServerSideProps (context) {
    const useDummyData = false; // Set to true to use DummyData instead of the Google API (100 search limit per day)
    const startIndex = context.query.start || '0'

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json())

    // Passes Results to Client after the Server has rendered
    return {
      props: {
        results: data,
      }
    }
}