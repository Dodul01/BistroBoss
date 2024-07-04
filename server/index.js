const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        const usersCollection = db.collection('users');
        const menusCollection = db.collection('menu');
        const reviewsCollection = db.collection('reviews');
        const cartCollection = db.collection('carts');

        app.post('/users', async (req, res) => {
            const user = req.body;
            // TODO: Insert user data if user dosen't exsist
            const query = { email: user.email };
            const isExsist = await usersCollection.findOne(query);

            if (isExsist) {
                return res.send({ message: 'User already exsist.' });
            }

            const result = await usersCollection.insertOne(user);

            res.send(result);
        })

        app.get('/users', async (req, res) => {
            const result = await usersCollection.find().toArray();
            res.send(result);
        })

        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.deleteOne(query);

            res.send(result);
        })

        app.patch('/users/admin/:id', async (req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const updatedUser = {
                $set : {
                    role: 'admin'
                }
            }
            const result = await usersCollection.updateOne(filter, updatedUser);

            res.send(result);
        })

        app.get('/menus', async (req, res) => {
            const find = menusCollection.find();
            const menus = await find.toArray();
            res.send(menus);
        });

        app.get('/reviews', async (req, res) => {
            const find = reviewsCollection.find();
            const reviews = await find.toArray();

            res.send(reviews);
        });

        app.get('/carts', async (req, res) => {
            const email = req.query.email;
            const query = { email: email }
            const result = await cartCollection.find(query).toArray();
            res.send(result);
        })

        // Carts Collections
        app.post('/carts', async (req, res) => {
            const cartItem = req.body;
            const result = await cartCollection.insertOne(cartItem);
            res.send(result);
        });

        app.delete('/carts/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await cartCollection.deleteOne(query);

            res.send(result)
        })

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