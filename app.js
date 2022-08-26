// use starter express

var express = require("express");
var app = express();
// use mongoose
var mongoose = require("mongoose");
// connect to mongoose cloud database

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://stunggal:stgl@stunggal.d5qrgo3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

// define the first route
app.get("/", function (req, res) {
    // make nilai object inside users object
    var users = {
        nama: "stunggal",
        email: "asd.com",
        nilai: {
            uas: 90,
            uts: 80,
        },
    };
    // get data from mongodb and pass it to view
    const data = async (req, res) => {
        try {
            const data = await collection.find().toArray();
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    };
});


// listen to port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
