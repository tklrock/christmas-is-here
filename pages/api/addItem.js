import executeQuery from './db';

export default async function handler(req, res) {

    const query = "INSERT INTO wishlist (name, price, notes, link) VALUES (?,?,?,?);";
    const values = [req.body.name, req.body.price, req.body.notes, req.body.link];
    try {
        await executeQuery(query, values);
        res.status(200).json({results: req.body});
    } catch (error){
        res.status(500).send({error: error.message});
    }
}