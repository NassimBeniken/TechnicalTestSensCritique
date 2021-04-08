import React, { useState } from 'react'
import { getAnime } from "../http/AnilistClient"
import Anime from "./Anime"
//import { MysqlConnection } from "../repository/MysqlConnection"

const AnimeList = () => {
    const [page, setPage] = useState(1)
    const perPage = 30
    const { loading, error, data } = getAnime(page, perPage)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
    
    const animes = data.Page.media.map(function(anime) {
        /*const id = anime.id
        const title = anime.title.english
        const description = anime.description
        try {
            const result = executeQuery({
                query: "INSERT INTO anime (id, title, description) VALUES(?, ?, ?)",
                values: [id, title, description]
            })
            console.log(result)
        } catch (an_error) {
            console.log(an_error)
        }*/
        return <li style={styles.li} key={anime.id}><Anime anime={anime}/></li>
    } )

    const handlePreviousButtonClick = () => {
        if(page !== 1) {
            setPage(page - 1)
        }
    }

    const handleNextButtonClick = () => {
        if(page !== data.Page.pageInfo.lastPage) {
            setPage(page + 1)
        }
    }

    return (
        <div>
            <div style={styles.buttonDiv}>
                <button style={styles.button} onClick={() => handlePreviousButtonClick()}>Page précédente</button>
                <button style={styles.button} onClick={() => handleNextButtonClick()}>Page suivante</button>
            </div>
            <div>
                <ul style={styles.ul}>
                    {animes}
                </ul>
            </div>
        </div>
    )
}

const styles = {
    buttonDiv: {
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        height: 30
    },
    ul: {
        columnCount: 3,
        listStyleType: "none",
        paddingLeft: 0,
        marginLeft: 0
    },
    li: {
        display: "inline-block",
        width: "100%"
    }
}

export default AnimeList
