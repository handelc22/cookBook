import React from 'react';

const GroceryList = ({ groceries }) => {
  return (
    <ul className="list-group">
      {groceries.map((grocery, index) => {
        return (
          <li className="list-group-item" key={index}>
            <input className="form-check-input me-1" type="checkbox" value="" aria-label={grocery.name} />
            { grocery.name }
          </li>
        )
      })}
    </ul>
  )
}

export default GroceryList;