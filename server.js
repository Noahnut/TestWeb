const express = require('express')
const serveStatic = require('serve-static')
const redis = require('redis')
const app = express();

const redisClient = redis.createClient(process.env.REDIS_URL).on("error", err => console.log("Error" + err));

app.post()