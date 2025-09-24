import express, { json } from "express";
import cors from 'cors'
import postgres from "postgres";
import env from 'dotenv'
env.config()

const app = express()
app.use(json())
app.use(cors())

const sql = postgres(process.env.DATABASE_URL)

app.get("/", (req, res) => {
    res.send()
})

app.post('/login', (req, res) => {
    const { name, password } = req.body

    if (!name || !password) {
        return res.status(400).json({ msg: "Nome e senha obrigatorios" })
    }

    const response = sql`SELECT * FROM users WHERE name = 'alice' AND password = 'senha123'`

    res.json({ data: response })

})

app.listen(3300, () => console.log("ok"))