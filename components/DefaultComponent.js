import Image from "next/image"
import AnimeList from './AnimeList'

export const DefaultComponent = () => {

  return (
    <div className={"hello-world"}>
      <Image
        src={"/images/senscritique.png"}
        alt={"logo"}
        width={300}
        height={180}
      />
      <p>
        Vous vouliez une liste d'Anime ? La voilà :
      </p>
      <AnimeList/>
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