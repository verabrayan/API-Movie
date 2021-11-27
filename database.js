const mongoose = require('mongoose');

const {MOVIES_MONGODB_HOST,DB_NAME,DB_USER,DB_PASSWORD} = process.env
const MONGODB_URI_LOCAL = `mongodb://${MOVIES_MONGODB_HOST}/${DB_NAME}`
const MONGODB_URI_CLUSTER = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.eayxd.mongodb.net/${DB_NAME}`

async function connection(){
    await mongoose.connect(MONGODB_URI_LOCAL,{useNewUrlParser: true,useUnifiedTopology: true})
    console.log('DB is connected')
}
connection().catch(err => console.log(err))