// CRUD Create Read Update Delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);



        db.collection('users').deleteOne({
            name: 'Mike'
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error);
        })

    }); 








//Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath="c:\data\db"