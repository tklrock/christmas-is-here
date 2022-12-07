import executeQuery from '../db';

export default async function handler(req, res) {
    
    const { story_id } = req.query
    const query = "SELECT * FROM story WHERE story_id = ?;";
    const values = [story_id];
    try {
        const story = await executeQuery(query, values);
        res.status(200).json({results: story});
    } catch (error){
        res.status(500).error({error: error.message});
    }

}