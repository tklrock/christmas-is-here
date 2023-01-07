import executeQuery from './db';

export default async function handler(req, res) {

    const query = "SELECT * FROM wishlist;";
    const values = [];
    try {
        const wishlist = await executeQuery(query, values);
        res.status(200).json({results: wishlist});
    } catch (error){
        res.status(500).send({error: error.message});
    }
}