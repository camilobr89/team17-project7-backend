const { Genres } = require('../db.js');

// obtenemos todos los generos de la base de datos
const getGenres = async (req, res) => {
  try {
    const genres = await Genres.findAll();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// obtenemos generos por id

const getGenresById = async (req, res) => {
    try {
        const { id } = req.params;
        const genres = await Genres.findByPk(id);
        if (!genres) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// post en la base de datos 

const postGenres = async (req, res) => {
    try {
        const { genre_name } = req.body;
        const newGenre = await Genres.create({
            genre_name
        });
        res.status(201).json(newGenre);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
       
    }
};

//put en la base de datos

const putGenres = async (req, res) => {
    try {
        const { id } = req.params;
        const { genre_name} = req.body;
        const genre = await Genres.findByPk(id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        const updatedGenre = await genre.update({
            genre_name
        });
        res.status(200).json(updatedGenre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// eliminamos un genero de la base de datos

const deleteGenres = async (req, res) => {
    try {
        const { id } = req.params;
        const genre = await Genres.findByPk(id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        await genre.destroy();
        res.status(200).json({ message: 'Genre deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getGenres, postGenres, putGenres, getGenresById, deleteGenres };