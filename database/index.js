const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


// test connection 
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('We are connected to the database!');
  });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
    id:  Number,
    name: String,
    full_name: String,

    owner: { 
      login: String, 
      id: Number, 
      url: String, 
      starred_url: String 
    },

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, Repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if(err){
    return console.error(err);
  } else {
    console.log('Repo saved succesfully');
  }
}

module.exports.save = save;