const express = require('express')
const app = express()
const supertest = require('supertest')
const request = supertest(app)

app.get('/api/event/main', async (req, res) => {
    res.json({message: 'pass!'})
})

it('get the endpoint from /api/event/main', async done => {
    const response = await request.get('/api/event/main')

    expect(response.status).toBe(200)
    done()
})