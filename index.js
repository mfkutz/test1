const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    const htmlResponse = `
        <html>
            <Head>
            <title>NodeJs y Express en Vercel</title>
            </head>
            <body>
            <h1>Soy un proyecto Backend en Vercel</h1>
            </body>
        </html>
    `
    res.send(htmlResponse)
})


app.listen(port, () => {
    console.log(`port running in http://localhost:${port}`)
})