import React from 'react'
import { Person, Country } from './Person'

const Persons = (props) => {
    return (
       <>
          {props.personsToShow.map(person => 
             <Person key={person.name} person={person} onClick={props.onClick}/>
          )}
       </>
    )
 }

 const Countries = (props) => {
     if (!props.filter) {
         return (
             <></>
         )
     }

     if (props.countriesToShow.length === 1) {
        const country = props.countriesToShow[0]
        return (
            <>
            <h2>{country.name}</h2>
            <h3>languages</h3>
                {country.languages.map(l => 
                    <li key={l.name}>{l.name}</li>
                )}
            <br></br>
            <img src={country.flag} alt='flag' height='100' width='100'></img>
            </>
        )
    }     

     if (props.countriesToShow.length > 10) {
         return (
             <p>Too many countries, specify another filter</p>
         )
     }
    
    return (
       <>
          {props.countriesToShow.map(country => 
             <Country key={country.name} country={country} onClick={props.onClick}/>
          )}
       </>
    )
 }

 export { Persons, Countries }