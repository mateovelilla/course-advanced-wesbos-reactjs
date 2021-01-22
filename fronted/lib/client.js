import { ApolloClient, InMemoryCache } from '@apollo/client';
import { endpoint } from '../config';

const client = new ApolloClient({
    uri : process.env.NODE_ENV === 'development' ? endpoint: endpoint,
    cache: new InMemoryCache(),
    request: operation => {
        operation.setContext({
            fetchOptions: {
                credentials: 'include',
            },
            headers,
        })
    }
})
export default client