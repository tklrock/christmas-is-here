import mysql from "mysql2/promise"

export default async function executeQuery(query, values) { 
    const dbConnection = await mysql.createConnection({
        host: "christmasisheredb.cx3jifosqdzy.us-east-2.rds.amazonaws.com",
        port: 3306,
        database: "christmasapp",
        user: "admin",
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