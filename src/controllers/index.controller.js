const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:'123',
    database: 'catalogo_peliculas'
})

const getMovies =  async (req,res)=>{
    const response = await pool.query('SELECT * FROM movies');
    res.status(200).json(response.rows);
}

const getMoviesById = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM movies WHERE id=$1',[id]);
    res.status(200).json(response.rows);
}

const updateMoviesId = async(req,res)=>{
    const id = req.params.id;
    const {title,year,director,synopsis} = req.body;
    console.log(`Usted quiere actualizar  la pelicula con id : ${id}`);
    const response = await pool.query('UPDATE movies SET title=$1,year=$2,director=$3,synopsis=$4  WHERE id=$5',[title,year,director,synopsis,id]);
    res.status(200).json(`La movie ${id} fue Actualizada correctamente`);
}

const deletMoviesById = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM movies WHERE id=$1',[id]);
    res.status(200).json(`La movie ${id} fue eliminado correctamente`);
}

const createMovies =  async (req,res)=>{
    const {title,year,director,synopsis} = req.body;

    const response = await pool.query('INSERT INTO movies (title,year,director,synopsis) VALUES ($1,$2,$3,$4)',[title,year,director,synopsis])
    console.log(response);
    res.json(
        {
            message: "Pelicula Insertado correctamente",
            status:200,
            body:{
                movies:{title,year,director,synopsis}
            }

        }
    )
}

module.exports = {
    getMovies,
    createMovies,
    getMoviesById,
    deletMoviesById,
    updateMoviesId
}