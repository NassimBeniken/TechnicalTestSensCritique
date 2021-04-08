import { executeQuery } from "../../repository/MysqlConnection"

export default async (req, res) => {
    const body = JSON.parse(req.body)
    const description = body.description.replace(/(\r\n|\n|\r)/gm, "").replace(/'/g,'"');
    const title = (body.title !== null ? body.title.replace(/'/g,'"') : "No title")
    const query = "INSERT INTO anime(title, description) VALUES('" + title + "','"+ description + "')"
    const result = executeQuery({
        query: query
    })
    res.status(200).json({task: "Ajout d'anime"})
    console.log(result)
}