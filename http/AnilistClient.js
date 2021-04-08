import {ApolloClient, InMemoryCache, gql, useQuery} from "@apollo/client";

export const AnilistClient = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

export const getAnime = (page, perPage) => {
  const query = gql`
    query GetAnime {
      Page(page: ${page}, perPage: ${perPage}) {
        media(type: ANIME) {
          id
          title {
            english
          }
          bannerImage
        }
      }
    }  
  `
  return useQuery(query)
}