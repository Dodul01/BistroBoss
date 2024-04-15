const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@testybyte.8ypqlqr.mongodb.net/?retryWrites=true&w=majority&appName=testyByte`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        const db = client.db('BistroBoss');
        const menusCollection = db.collection('menu');
        const reviewsCollection = db.collection('reviews');

        app.get('/menus', async (req, res) => {
            const find = menusCollection.find();
            const menus = await find.toArray()

            res.send(menus);
        })

        app.get('/reviews', async (req, res) => {
            const find = reviewsCollection.find();
            const reviews = await find.toArray();

            res.send(reviews);
        });

        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Welcome to the bistroboss server.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});