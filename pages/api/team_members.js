import executeQuery from './db';

export default async function handler(req, res) {

    const query = "SELECT * FROM team_member;";
    const values = [];
    try {
        const team_members = await executeQuery(query, values);
        res.status(200).json({results: team_members});
    } catch (error){
        res.status(500).send({error: error.message});
    }
}