import pool from "./pool.js";

export async function getMessages(){
    const {rows} = await pool.query("SELECT * FROM messages;");
    console.log(rows);
    return rows;
}

// async function postMessage(message,user) {
    
// }
