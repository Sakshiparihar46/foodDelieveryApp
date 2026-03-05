import React from 'react'
import './add.css'
import {assets} from '../../assets/assets.js'
function Add() {
  return (
    <div className="add"> 
      <form className='flex-col'>
        <div className="add-img-upload flex-col">
          <p>upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
        <input type="file" id="image" hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>product name</p>
          <input type="text" name="name" placeholder='type-here'/>
        </div>
        <div className="add product-description flex-col">
        <p>product-descripton</p>
        <textarea name="description" rows="6" placeholder='write content here'required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product category</p>
            <select name="" id=""></select>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Add

