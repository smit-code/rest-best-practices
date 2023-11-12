const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const mongoUrl = process.env.MONGO_URL

mongoose
  .connect(mongoUrl)
  .then(() => { 
    console.log('Database Connected...')
  })
  .catch((err) => {
    console.log(err)
  })
