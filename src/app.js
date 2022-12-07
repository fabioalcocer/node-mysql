import express from 'express'
import { pool } from './db.js'

const app = express()

app.listen(3000)

app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users')
  res.json(rows) 
})

app.get('/ping', async (req, res) => {
  const [result] = await pool.query(`SELECT "Hello World" as RESULT`)
  console.log(result)
  res.json(result[0])
})

app.get('/create', async (req, res) => {
  const result = await pool.query(`INSERT INTO users(name) VALUES ("Fabio")`)
  res.json(result)
})

console.log('Server on port 3000')