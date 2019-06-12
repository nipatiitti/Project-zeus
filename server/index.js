import { logErrors, errorHandler } from "./error"
import express from "express"
import path from "path"
import morgan from "morgan"
import bodyParser from "body-parser"
import api from "./api"
import fs from "fs"
import http from "http"
import https from "https"

const app = express()

// ONLY FOR DEV PURPOSES
http.createServer(app).listen(5000, () => {
    console.log("Running")
})

/* UNCOMMENT FOR PRODUCTION */

// Variables regarding certificate
// const DOMAIN = process.env.DOMAIN
// const SUBDOMAIN = process.env.SUBDOMAIN
// const FQDN = SUBDOMAIN ? `${SUBDOMAIN}.${DOMAIN}` : DOMAIN
// const CERT_DIR = process.env.CERT_DIR || "/etc/letsencrypt/live"

// Certificate
// const privateKey = fs.readFileSync(`${CERT_DIR}/${FQDN}/privkey.pem`, "utf8")
// const certificate = fs.readFileSync(`${CERT_DIR}/${FQDN}/cert.pem`, "utf8")
// const ca = fs.readFileSync(`${CERT_DIR}/${FQDN}/chain.pem`, "utf8")

// const credentials = {
//     key: privateKey,
//     cert: certificate,
//     ca: ca
// }

// https.createServer(credentials, app).listen(8443, () => {
//     console.log('Running')
// })

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// setup the logger
app.use(morgan("tiny"))

app.use(express.static(__dirname, { dotfiles: "allow" }))

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Handling errors
app.use(logErrors)
app.use(errorHandler)

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    //  if ((req.get('X-Forwarded-Proto') !== 'https')) {
    //    res.redirect('https://' + req.get('Host') + req.url)
    //  }
    next()
})

app.use("/api", api)

// For everything else return React so react can do extra routing
app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "./", "404.html"))
})
