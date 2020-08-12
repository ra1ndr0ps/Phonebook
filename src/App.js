import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Filter, PersonForm } from './components/Form'
import { Persons, Countries } from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ personFilter, setPersonFilter ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ country, setCountry ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  useEffect(() => {
   axios
     .get('https://restcountries.eu/rest/v2/all')
     .then(response => {
       setCountries(response.data)
     })
  }, [])


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleCountryChange = (event) => {
   setCountry(event.target.value)
 }

  const handleNumberChange = (event) => {
   setNewNumber(event.target.value)
 }

 const handleFilterChange = (event) => {
   setPersonFilter(event.target.value)
 }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    personService
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setErrorMessage(
          {text: `Added '${newName}'`, color: 'green'}
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(response => {
          setPersons(persons.filter(p => p !== person))
          setErrorMessage(
            {text: `${person.name} removed successfully`, color: 'green'}
          )
        })
        .catch(error => {
          setErrorMessage(
            {text: `${person.name} was already removed from server`, color: 'red'}
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p !== person))
        })
    }
  }

  
  const showCountry = (country) => {
   setCountry(country)
 } 

  const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(country.toLowerCase()))
  const personsToShow = persons.filter(p => p.name.includes(personFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Notification message={errorMessage} />

      <Filter personFilter={personFilter} handleFilterChange={handleFilterChange} />
      
      <h2>Add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} onClick={deletePerson}/>

      <h2>Countries</h2>

      <div>
         find countries: <input
         value={country}
         onChange={handleCountryChange} />
      </div>

      <Countries countriesToShow={filteredCountries} filter={country} onClick={showCountry}/>

  </div>
  )
}

export default App