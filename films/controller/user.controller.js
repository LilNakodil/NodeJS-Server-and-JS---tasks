const db=require('../db')
class GenreController{
    // CRUD ЦИКЛ ДЛЯ ОПЕРАЦИЙ С ЖАНРАМИ
    async createGenre(req,res){
        const {genrename} = req.body
        console.log(genrename)
        const newGenre = await db.query('INSERT INTO GENRES (genrename) values ($1) RETURNING *',[genrename])
        res.json(newGenre.rows[0])
    }
    async getGenres(req,res){
        const genres=await db.query("select * FROM GENRES")
        res.json(genres.rows)
    }
    async getGenre(req,res){
        const id = req.params.id
        const genre=await db.query('SELECT * FROM genres where id=$1',[id])
        res.json(genre.rows[0])
    }
    async updateGenre(req,res){
       const {id,genrename}=req.body
       const updGenre= await db.query("UPDATE GENRES SET genrename = $1 WHERE id = $2 RETURNING *",[genrename,id]); 
       res.json(updGenre.rows[0])
    }
    async deleteGenre(req,res){
        const id = req.params.id
        const genre=await db.query('DELETE FROM genres where id=$1',[id])
        res.json(genre.rows[0])
    }
}
module.exports=new GenreController()
