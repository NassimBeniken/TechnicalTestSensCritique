import React from 'react'
import Image from "next/image"
import { getAnime } from "../http/AnilistClient"

export const DefaultComponent = () => {

  
  const { loading, error, data } = getAnime()

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const animes = data.Page.media.map((anime) => <li key={anime.id}>
    <img src={anime.bannerImage} height={100} width={100}/>
    {anime.title.english}
    </li>)
  //data.Page.media.map((item) => console.log(item.id))
  //console.log(data.Page.media)
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
      <div>
        <ul>
          {animes}
        </ul>
      </div>
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