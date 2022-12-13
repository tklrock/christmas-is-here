import executeQuery from './db';

export default async function handler(req, res) {

    const query = "SELECT * FROM song ORDER BY title;";
    const values = [];
    try {
        const songs = await executeQuery(query, values);
        res.status(200).json({results: songs});
    } catch (error){
        res.status(500).send({error: error.message});
    }
}