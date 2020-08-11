import React from 'react'

const Filter = (props) => {
    return (
       <>
       filter shown with <input
          value={props.personFilter}
          onChange={props.handleFilterChange} />
       </>
       )
 }

 const PersonForm = (props) => {
   return (
      <>
         <form onSubmit={props.addPerson}>
            <div>
            name: <input
            value={props.newName}
            onChange={props.handleNameChange} />
            </div>
            <div>
            number: <input
            value={props.newNumber}
            onChange={props.handleNumberChange} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
         </form>
      </>
   )
}

export { Filter,
      PersonForm
 }