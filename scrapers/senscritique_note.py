import requests as r
import mariadb
import json
import os, sys
import re

"""
Fonction permettant de récupérer l'URL SensCritique d'un animé
⚠️ Ne pas toucher à cette fonction, elle vous sera utile.
"""
def get_sc_anime_url(anime_name):
    url = f'https://www.senscritique.com/sc2/search/autocomplete.json?query={anime_name}'
    headers = {
        "x-requested-with": "XmlHttpRequest"
    }
    result = r.get(url, headers=headers)
    content_in_json = json.loads(result.content)
    first_result = None
    if len(content_in_json['json']) > 0:
        first_result = content_in_json['json'][0]['url']

    return first_result


"""
Connexion à la base de données
⚠️ Ne pas toucher à cette fonction, elle vous sera utile.
"""
def connect_to_database():
    try:
        connection = mariadb.connect(
            host=os.getenv("DATABASE_HOST"),
            port=int(os.getenv("DATABASE_PORT")),
            user=os.getenv("DATABASE_USER"),
            password=os.getenv("DATABASE_PASSWORD"),
            database=os.getenv("DATABASE_NAME")
        )
        return connection
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)


"""
Ajouter votre logique en dessous ⬇️
"""

"""
Fonction permettant de rechercher la note de l'anime sur le site de SensCritique et de l'ajouter en base
"""
def addMarkToDB(title):
    try:
        print("Getting the url of " + title + "...")
        url = get_sc_anime_url(title)
        res = r.get(url)
        html = res.text
        res.close()
        pattern = "pvi\-scrating\-value\"\>(.*?)\<\/span\>"
        mark = re.search(pattern, html).group(1)
        print(mark)
        print("Adding the SensCritique mark of '" + title + "' in database...")
        sql = "UPDATE anime SET mark = '" + mark + "' WHERE title = '" + title + "'"
        cur.execute(sql)
        connection.commit()
        print(cur.rowcount, "record(s) affected")
    except ValueError:
        print("Error during the process")

"""
Connexion à la base
"""
connection = connect_to_database()
cur = connection.cursor()

"""
Récupération de l'ensemble des animes de la base
"""
cur.execute(f"SELECT title FROM anime")
rows = cur.fetchall()

"""
Ajout des notes de SensCritique aux animes présents dans la base
"""
for title in rows:
    if title[0] != "No title":
        addMarkToDB(title[0])