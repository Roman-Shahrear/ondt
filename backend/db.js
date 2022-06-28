const mongoose = require('mongoose');

const url =
'mongodb://ondt-mern:ondt-mern@cluster0-shard-00-00.dt89c.mongodb.net:27017,cluster0-shard-00-01.dt89c.mongodb.net:27017,cluster0-shard-00-02.dt89c.mongodb.net:27017/onDemandTuitor?ssl=true&replicaSet=atlas-nwnsa2-shard-0&authSource=admin&retryWrites=true&w=majority';

module.exports.connect =() => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('MongoDB connected successfully');
        })
        .catch(() => console.log('Error', console.error));
}