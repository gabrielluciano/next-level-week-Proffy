// Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Config do nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Config de arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// Receber os dados por post
server.use(express.urlencoded({ extended: true }))

// Rotas da aplicação
server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.post("/save-class", saveClasses)

// Porta onde aplicação está sendo executada e start do servidor
const porta = 5500
server.listen(porta, () =>
    console.log(`Servidor sendo executado na porta: ${porta}`))