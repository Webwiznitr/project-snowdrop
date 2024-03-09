
// const { MongoClient, ServerApiVersion } = require('mongodb');

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.MONGO_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// export async function POST(req) {
//     const body  = await req.json();
//     console.log(body);
//     await client.connect();
//     await client.db('snowdrop').collection('Induction24').insertOne(body);
//     return new Response(JSON.stringify({ message: 'Inserted!' , body}));
// }
