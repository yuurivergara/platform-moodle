import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o6q1qx0w0y01xm4c469ous/master",
  cache: new InMemoryCache()
})