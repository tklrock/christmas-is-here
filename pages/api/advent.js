import executeQuery from './db';

export default async function handler(req, res) {

    const query = "SELECT * FROM advent ORDER BY day;";
    const values = [];
    try {
        const message = await executeQuery(query, values);
        res.status(200).json({results: message});
    } catch (error){
        res.status(500).error({error: error.message});
    }
}