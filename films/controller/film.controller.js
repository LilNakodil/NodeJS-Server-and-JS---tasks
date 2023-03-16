const db=require('../db')
class FilmController{
    // CRUD ЦИКЛ ДЛЯ ОПЕРАЦИЙ С ФИЛЬМАМИ
    async createFilm(req,res){
        const {filmname,country,premiereinworld,premiereinnativecountry,slogan,description,age,rating,genre,viewerss,genre2,genre3,genre4,duration,persons}=req.body

        const newFilm =await db.query('INSERT INTO FILMS (filmname,country,premiereinworld,premiereinnativecountry,slogan,description,age,rating,genre,viewerss,genre2,genre3,genre4,duration,persons) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING *',[filmname,country,premiereinworld,premiereinnativecountry,slogan,description,age,rating,genre,viewerss,genre2,genre3,genre4,duration,persons] )
        res.json(newFilm.rows[0])
    }
    async getFilms(req,res){
        const films=await db.query('SELECT * FROM FILMS')
        res.json(films.rows)
    }
    async getFilm(req,res){
        const id = req.params.id
        const FILM=await db.query('SELECT * FROM FILMS where ID = $1',[id])
        res.json(FILM.rows)
    }
    async updateFilm(req,res){
        const {id,filmname,country,premiereinworld,premiereinnativecountry,slogan,description,age,rating,genre,viewerss,genre2,genre3,genre4,duration,persons}=req.body
        const updFilm=await db.query('UPDATE FILMS set filmname=$2,country=$3,premiereinworld=$4,premiereinnativecountry=$5,slogan=$6,description=$7,age=$8,rating=$9,genre=$10,viewerss=$11,genre2=$12,genre3=$13,genre4=$14,duration=$15,persons=$16 where id=$1 RETURNING *',[id,filmname,country,premiereinworld,premiereinnativecountry,slogan,description,age,rating,genre,viewerss,genre2,genre3,genre4,duration,persons])
        res.json(updFilm.rows)
    }
    async deleteFilm(req,res){
        const id = req.params.id
        const film=await db.query('DELETE FROM FILMS where id=$1',[id])
        res.json(film.rows)
    }
}
module.exports=new FilmController()