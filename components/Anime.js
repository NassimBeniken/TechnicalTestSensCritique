import React from 'react'

export default class Anime extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div style={styles.container}>
                <div>
                    <img style={styles.img} src={this.props.anime.bannerImage} alt="No image"/>
                </div>
                <div style={styles.text}>
                    {this.props.anime.title.english !== null ? this.props.anime.title.english : "No title"}
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        textAlign: "center"
    },
    text: {
        fontFamily: "Gill Sans",
        marginTop: 10,
        marginBottom: 20,
        textShadow: "5px 3px 5px rgba(123, 123, 123, 1)"
    },
    img: {
        height: 120,
        width: 240,
        boxShadow: "5px 5px 5px 0px rgba(18,18,18,0.75)",
    }
}