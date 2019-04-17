const mongoose = require('mongoose');
const Character = require('../models/got');

const connectionString = 'mongodb://localhost/test';


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex:true, 
    useFindAndModify: false
});


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});


const charData = require('../populateCharacters')

// Character.collection.insertMany(charData, (err, data) => {
//     console.log('added data');
//     mongoose.connection.close();
// });

