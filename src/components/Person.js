import React from 'react'

const Person = (props) => {
    return (
      <li>
        {props.person.name} {props.person.number}
        <button onClick={() => props.onClick(props.person)}>delete</button>
      </li>
      )
 }

 const Country = (props) => {
  return (
    <li>
      {props.country.name}
      <button onClick={() => props.onClick(props.country.name)}>show</button>
    </li>
    )
}

 export {Person, Country}