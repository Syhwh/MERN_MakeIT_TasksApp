const mongoose =require ('mongoose');
const config=require('../config/config');

mongoose.connect(config.mongoose.db, config.mongoose.options)
.then(()=>console.log('Database conected'))
.catch((error)=>{
    console.log(`Database connection error: ${error}`)
})