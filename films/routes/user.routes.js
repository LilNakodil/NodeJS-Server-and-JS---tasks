const Router=require('express')
const router = new Router()
const GenreController=require('../controller/user.controller')
router.post('/user',GenreController.createGenre)
router.get('/user',GenreController.getGenres)
router.get('/user/:id',GenreController.getGenre)
router.put('/user',GenreController.updateGenre)
router.delete('/user/:id',GenreController.deleteGenre)


module.exports=router