const mongoose=require('mongoose');

mongoose.connect(`mongodb://localhost/nft_db`);

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error occurred while setting up the database'));
db.once('open',function(){
    console.log("successfully connected to database");
})

module.exports=db;