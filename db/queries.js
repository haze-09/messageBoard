import pool from "./pool.js";

export async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  console.log(rows);
  return rows;
}

export async function postMessage(name, text) {
    console.log(name,text);
    await pool.query("INSERT INTO messages (name, text) VALUES ($1, $2)", [
        String(name),
        String(text),
    ]);
}
