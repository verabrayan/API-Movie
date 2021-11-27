const movie = require('../schemas/movie')




class movies {
    async getMovies(){
        const movies = await movie.find().limit(5) 
        return movies || []
    }

    async getMovieById(id){
        const item = await movie.findById(id) 
        return item || {}
    }
    async getMoviesByFilter(query){
        console.log(query)
        const items = await movie.find(query) 
        return items|| []
    }


   async createMovie(data){
        const {nombre,director,clasificacion} = data
        const newMovie = new movie({nombre,director,clasificacion})
        await newMovie.save()
        return newMovie|| {}
    }

    async updateMovie(id,data){
        const item = await movie.findByIdAndUpdate(id,data)
        return item || {}
    }
    async deleteMovie(id){
        const movieId = await movie.findByIdAndDelete(id)
        return movieId || {}
    }
} 
module.exports = movies