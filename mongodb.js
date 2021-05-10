const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology:true}, (error,client)=>{
    if(error)
        return console.log("error")
    
    const db = client.db(databaseName)

    const updatePromise = db.collection('users').updateOne({
        _id : new ObjectID("5f78abb72674c6096c1e673d")
    },
        {
            $set: {
                name: "chitu"
            }
        })
    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})