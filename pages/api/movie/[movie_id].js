import executeQuery from '../db';

export default async function handler(req, res) {
    
    const { movie_id } = req.query
    const query = "SELECT * FROM movie WHERE movie_id = ?;";
    const values = [movie_id];
    try {
        const movie = await executeQuery(query, values);
        res.status(200).json({results: movie});
    } catch (error){
        res.status(500).error({error: error.message});
    }

}