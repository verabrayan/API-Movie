const {Router} = require('express');
const router = Router();
const movies = require('../services/movies')

const movie = new movies()

   

router.get('/',async(req,res)=>{
    const items = await movie.getMovies()
    res.status(200).json(items)
})

router.get('/filter',async(req,res)=>{
    console.log(req.query)
    const items = await movie.getMoviesByFilter(req.query)
    res.status(200).json(items)
})

router.get('/:id',async(req,res)=>{
    const items = await movie.getMovieById(req.params.id)
    res.status(200).json(items)
})



    
router.post('/',async(req,res)=>{
    const newItem = await movie.createMovie(req.body)
    res.status(200).json("new product")
})

router.put('/:id',async(req,res)=>{
    const update = await movie.updateMovie(req.params.id,req.body)
    res.status(200).json(update)
})

router.delete('/:id',async(req,res)=>{
    await movie.deleteMovie(req.params.id)
    res.status(200).json("product delete")
})

module.exports = router