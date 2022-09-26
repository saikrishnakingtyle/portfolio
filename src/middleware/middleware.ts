const express = require('express')
const app = express()

export function middleware(req, res, next){
  console.log('Time:', Date.now())
  req.headers['test'] = 'testvalue'
  next()
}