const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://cs260:cs260password@cluster0.w01aemq.mongodb.net/bnb`;

const client = new MongoClient(url);