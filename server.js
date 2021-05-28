const express = require('express')

const app = express()

app.use('/', express.json())
app.use('/api/users', require('./routes/users'))
// app.use(require('./routes/error'))

app.listen(4000, () => {
  console.log(`Server started at http://localhost:4000`)
})
