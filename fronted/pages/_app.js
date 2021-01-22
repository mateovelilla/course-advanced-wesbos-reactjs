import Page from '../components/Page';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/client'
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

export default MyApp;
