import React, { useState } from 'react'
import { getAnime } from "../http/AnilistClient"
import Anime from "./Anime"

const AnimeList = () => {
    const [page, setPage] = useState(1)
    const perPage = 20
    const { loading, error, data } = getAnime(page, perPage)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
      
    const animes = data.Page.media.map((anime) => <Anime key={anime.id} anime={anime}/>)

    return (
        <div>
            <div style={styles.buttonDiv}>
                <button style={styles.button} onClick={() => setPage(page - 1)}>Page précédente</button>
                <button style={styles.button} onClick={() => setPage(page + 1)}>Page suivante</button>
            </div>
            <div style={styles.list}>
                {animes}
            </div>
        </div>
    )
}

const styles = {
    buttonDiv: {
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        height: 30
    },
    list: {

    }
}

export default AnimeList
