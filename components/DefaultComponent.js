import Image from "next/image"
import { gql, useQuery } from "@apollo/client";

export const DefaultComponent = () => {

  const query = gql`
    query GetAnime {
      Page {
        media(type: ANIME) {
          title {
            english
          }
          bannerImage
        }
      }
    }  
  `
  const { loading, error, data } = useQuery(query)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className={"hello-world"}>
      <Image
        src={"/images/senscritique.png"}
        alt={"logo"}
        width={300}
        height={180}
      />
      <h1>Hello world ! 👋🏻</h1>
      <p>
        Bienvenue sur le test technique SensCritique 🎉
      </p>
      <style jsx>{`
        h1 {
          font-size: 4em;
          font-weight: bold;
          text-align: center;
          line-height: 4em;
          vertical-align: middle;
        }
        p {
          font-weight: bold;
          text-align: center;
          font-size: 2em;
        }
        `
      }
      </style>
    </div>
  )
}