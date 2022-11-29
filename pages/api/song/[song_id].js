import executeQuery from '../db';

export default async function handler(req, res) {
    
    const { song_id } = req.query
    const query = "SELECT * FROM song WHERE song_id = ?;";
    const values = [song_id];
    try {
        const movies = await executeQuery(query, values);
        res.status(200).json({results: movies});
    } catch (error){
        res.status(500).error({error: error.message});
    }

}