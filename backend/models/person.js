const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

const personSchema = new mongoose.Schema({
  name: {type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  number: {type: String,
    minlength: 8,
    required: true
  }
})

personSchema.plugin(uniqueValidator)

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