import { DocSearch } from '@docsearch/react';
import './css/style.css';

import Head from 'next/head';

export const SEARCH_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_KEY;
export const SEARCH_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;

export function Search() {
  if (!SEARCH_APP_ID || !SEARCH_API_KEY) {
    return null;
  }
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href={`https://${SEARCH_APP_ID}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>
      <DocSearch
        apiKey={SEARCH_API_KEY}
        indexName={'jonathanbytes'}
        appId={SEARCH_APP_ID}
        placeholder='Buscar en el blog'
        className='bg-red-500'
      />
    </>
  );
}
