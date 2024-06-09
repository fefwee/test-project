import {ApolloClient, InMemoryCache, NormalizedCacheObject} from "@apollo/client";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://localhost:4000/api',
    cache: new InMemoryCache(),
})

export default client;