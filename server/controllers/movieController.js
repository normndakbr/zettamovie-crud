const Movie = require('../models/movie')

class movieController {
    static async showAll(request, response) {
        try {
            const data = await Movie.findAll()
            response.status(201).json(data)
        } catch (error) {
            next(error);
        }
    }

    static async showById(request, response) {
        try {
			const movieId = +request.params.id;
			const data = await Movie.findByPk({
                where: { id: movieId }
            });
			response.status(200).json(data);
		} catch (error) {
			next(error);
		}
    }

    static async addMovie(request, response, next) {
        const newData = { 
            title: request.body.title,
            episodes: request.body.episodes, 
            info_url: request.body.info_url, 
            watch_url: request.body.watch_url
        }
        try{
            const data = await Movie.create(newData);
            const result = {
                "id": data.id,
                "title": data.title,
                "episodes": data.episodes,
                "info_url": data.info_url,
                "watch_url": data.watch_url
            }
            response.status(201).json(result);
        }catch(error){
            next(error);
        }
    }

    static async updateMovie(request, response) {
        try {
			const movieId = +request.params.id;
			const newData = { 
                title: request.body.title, 
                episodes: request.body.episodes, 
                info_url: request.body.info_url, 
                watch_url: request.body.watch_url 
            }
			const updateMovie = await Movie.update(newData, { 
                where: { id: movieId }, 
                returning: true 
            })
			response.status(200).json(updateMovie[1][0]);
		} catch (error) {
			next(error);
		}
    }
}

module.exports = movieController