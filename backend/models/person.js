const mongoose = require('mongoose')

const url = "mongodb+srv://rain:learnreact@cluster0.xmpu9.mongodb.net/phonebook-app?retryWrites=true&w=majority"

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Person = mongoose.model('Person', personSchema)

// if (process.argv.length == 3) {
//   Person.find({}).then(result => {
//     console.log('phonebook:')
//     result.forEach(person => {
//       console.log(`${person.name} ${person.number}`)
//     })
//     mongoose.connection.close()
//   })
// }

// else if (process.argv.length < 5) {
//   console.log('Please provide name and phonenumber: node mongo.js <password> <name> <num>')
//   process.exit(1)
// }

// else {
//   const person = new Person({
//     name: process.argv[3],
//     number: process.argv[4]
//   })
  
//   person.save().then(result => {
//     console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
//     mongoose.connection.close()
//   })
// }

module.exports = mongoose.model('Person', personSchema)