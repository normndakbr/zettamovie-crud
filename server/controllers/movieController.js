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
}

module.exports = movieController