import React from 'react'
import withCategories from '../hocs/withCategories';

const Products = ({ categories }) => (
    <div>
        <p>New Product</p>
        <span>Name: </span>
        <input></input>
        <select>
          <option selected disabled>Choose category</option>
          { categories.map(category => (
            <option value={category.id}>{ category.name }</option>
          )) }
        </select>
    </div>
)

export default withCategories(Products)