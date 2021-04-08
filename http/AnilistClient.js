import {ApolloClient, InMemoryCache, gql, useQuery} from "@apollo/client";

export const AnilistClient = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

export const getAnime = (page, perPage) => {
  const query = gql`
    query GetAnime {
      Page(page: ${page}, perPage: ${perPage}) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(type: ANIME) {
          id
          title {
            english
          }
          coverImage {
            large
          }
          description
        }
      }
    }  
  `
  return useQuery(query)
}