const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost'

const userName = process.argv[2]
const userAge = Number(process.argv[3])
const userEmail = process.argv[4]

const [name, age, email] = process.argv.slice(2)

const client = new MongoClient(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  // (err, client) => {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   // Specify database you want to access
  //   const db = client.db('lean-coffee-board')

  //   const users = db.collection('users')

  //   users.insertOne({
  //     name: userName,
  //     age: userAge,
  //     email: userEmail,
  //   })

  // users.find().toArray((err, results) => {
  //   console.log(results)
  // })
  // client.close()
  // }
)

async function create() {
  try {
    await client.connect()

    const db = client.db('lean-coffee-board')
    const users = db.collection('users')

    // await users.insertOne({
    //   name: userName,
    //   age: userAge,
    //   email: userEmail,
    // })

    await users.insertOne({
      name,
      age,
      email,
    })

    await console.log(Success)

    // await users.find().toArray((err, results) => {
    //   console.log(results)
    // })
  } catch {
    console.log('error')
  } finally {
    await client.close()
  }
}

if (userEmail) {
  create().catch(console.dir)
}
