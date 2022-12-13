import executeQuery from './db';

export default async function handler(req, res) {

    const query = "SELECT * FROM story ORDER BY title;";
    const values = [];
    try {
        const stories = await executeQuery(query, values);
        res.status(200).json({results: stories});
    } catch (error){
        res.status(500).send({error: error.message});
    }
}