import executeQuery from './db';

export default async function handler(req, res) {

    const query = "SELECT * FROM movie ORDER BY name;";
    const values = [];
    try {
        const movies = await executeQuery(query, values);
        res.status(200).json({results: movies});
    } catch (error){
        res.status(500).error({error: error.message});
    }
}