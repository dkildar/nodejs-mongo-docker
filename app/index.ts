import app from './app'
import * as mongoose from "mongoose";

const port = process.env.PORT || 3000
const databaseHost = process.env.DB_HOST
const databasePort = process.env.DB_PORT

mongoose.connect(`mongodb://${databaseHost}:${databasePort}`, {
  useNewUrlParser: true,
  auth: {
    username: process.env.MONGO_ROOT_USERNAME,
    password: process.env.MONGO_ROOT_PASSWORD,
  },
  dbName: process.env.DB_NAME,
  autoReconnect: true,
})
  .then(
    () => console.log('Database connected'),
    error => { throw error }
  )

app.listen(port, (error) => {
  if (error) return console.log(error)
  return console.log(`Server is listening of ${port}`)
})

