// const  MongoClient = require('mongodb');
const { MongoClient } = require('mongodb');
const userName = 'cs260';
const password = 'cs260password';
const hostname = 'cluster0.w01aemq.mongodb.net';
const url = `mongodb+srv://${userName}:${password}@${hostname}`;

// const client = new MongoClient(url);

// async function tryInsert(){
//     const collection = client.db('rental').collection('house');

//     const house = {
//       name: 'Beachfront views',
//       summary: 'From your bedroom to the beach, no shoes required',
//       property_type: 'Condo',
//       beds: 1,
//     };
//     await collection.insertOne(house);
// }

// tryInsert();

const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
