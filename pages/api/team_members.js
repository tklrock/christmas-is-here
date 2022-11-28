import executeQuery from './db';

export default async function handler(req, res) {

    const query = "SELECT * FROM team_member;";
    const values = [];
    try {
        const movies = await executeQuery(query, values);
        res.status(200).json({results: movies});
    } catch (error){
        res.status(500).error({error: error.message});
    }
}