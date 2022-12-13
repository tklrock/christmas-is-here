import mysql from "mysql2/promise"

export default async function executeQuery(query, values) { 
    const dbConnection = await mysql.createConnection({
        host: "ec2-3-142-247-12.us-east-2.compute.amazonaws.com",
        port: 3306,
        database: "christmasapp",
        user: "root",
        password: "Cheerorfear22"  
    });
    
    try {
        const [data] = await dbConnection.execute(query,values);
        dbConnection.end();
        return data;
    } catch (error) {
        return error;
    }
}