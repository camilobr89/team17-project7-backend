const { Movies, Genres, Categories, Reviews } = require('../db.js');

// obtenemos todos los movies de la base de datos e incluimos los datos de los generos, categorias y reviews

const getMovies = async (req, res) => {

    try {
        const movies = await Movies.findAll({
            include: [
                { model: Genres },
                { model: Categories },
                { model: Reviews }
            ]
        });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// obtenemos generos por id

const getMoviesById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movies.findByPk(id, {
            include: [{
                model: Genres,
                as: 'genres',
                through: { attributes: [] }  // esto evita que se incluyan los datos de la tabla intermedia
            }, {
                model: Categories,
                as: 'categories',
                through: { attributes: [] }  // esto evita que se incluyan los datos de la tabla intermedia
            }, {
                model: Reviews,
                as: 'reviews'
            }]

        });

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// post en la base de datos con el genero y la categoria

const postMovies = async (req, res) => {
    try {
        const { title, year, director, synopsis, genres, categories } = req.body;

        const newMovie = await Movies.create({
            title,
            year,
            director,
            synopsis
        });

        if (Array.isArray(genres)) {
            for (const genre of genres) {
                let genreDB = await Genres.findOne({
                    where: { genre_name: genre }
                });
                if (genreDB) {
                    await newMovie.addGenre(genreDB);
                }
            }
        }

        if (Array.isArray(categories)) {
            for (const category of categories) {
                let categoryDB = await Categories.findOne({
                    where: { category_name: category }
                });
                if (categoryDB) {
                    await newMovie.addCategory(categoryDB);
                }
            }
        }

        res.status(201).json(newMovie);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



//put en la base de datos

const putMovies = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, year, director, synopsis, genres, categories } = req.body;
        const movie = await Movies.findByPk(id, {
            include: [Genres, Categories]
        });

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        const updatedMovie = await movie.update({
            title,
            year,
            director,
            synopsis
        });

        // Eliminar todas las relaciones de géneros y categorías actuales
        await updatedMovie.setGenres([]);
        await updatedMovie.setCategories([]);

        // Añadir nuevas relaciones de géneros
        if (Array.isArray(genres)) {
            for (const genre of genres) {
                let genreDB = await Genres.findOne({
                    where: { genre_name: genre }
                });
                if (genreDB) {
                    await updatedMovie.addGenre(genreDB);
                }
            }
        }

        // Añadir nuevas relaciones de categorías
        if (Array.isArray(categories)) {
            for (const category of categories) {
                let categoryDB = await Categories.findOne({
                    where: { category_name: category }
                });
                if (categoryDB) {
                    await updatedMovie.addCategory(categoryDB);
                }
            }
        }

        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




// eliminamos un genero de la base de datos

const deleteMovies = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movies.findByPk(id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        await movie.destroy();
        res.status(200).json({ message: 'Movie deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getMovies, getMoviesById, postMovies, putMovies, deleteMovies };


